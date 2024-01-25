import { Controller, Body, Get, Post, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginDto, RegisterDto } from './dto'
import { GetUser } from './decorator'
import { users } from '@prisma/client'
import { JwtGuard } from './guard/jwt.guard'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto)
  }

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto)
  }

  @UseGuards(JwtGuard)
  @Get('user')
  user(@GetUser() user: users) {
    return user
  }
}
