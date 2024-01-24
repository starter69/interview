import { ForbiddenException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

import { PrismaService } from 'src/prisma/prisma.service'
import { LoginDto, RegisterDto } from './dto'
import { ConfigService } from '@nestjs/config'
import { Role } from '@prisma/client'

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService
  ) {}

  async signup(dto: RegisterDto) {
    const password = await argon.hash(dto.password)

    try {
      const user = await this.prisma.users.create({
        data: {
          name: dto.name,
          password,
          team_id: dto.team_id ? dto.team_id : null,
          role: Role.USER,
        },
      })

      return this.signToken(user.id, user.name)
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(
            'This username is already in use. Please choose a different username to complete the registration process.'
          )
        }
        throw error
      }
    }
  }

  async signin(dto: LoginDto) {
    const user = await this.prisma.users.findUnique({
      where: { name: dto.name },
    })

    if (!user) {
      throw new ForbiddenException('The username you entered does not exist. ')
    }

    if (!(await argon.verify(user.password, dto.password))) {
      throw new ForbiddenException('The password you entered is incorrect.')
    }

    return this.signToken(user.id, user.name)
  }

  async signToken(userId: number, name: string) {
    const payload = { sub: userId, name }

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: this.config.get('JWT_SECRET'),
    })

    return { access_token: token }
  }
}
