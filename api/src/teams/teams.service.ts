import { Injectable } from '@nestjs/common'
import { CreateTeamDto } from './dto/create-team.dto'
import { UpdateTeamDto } from './dto/update-team.dto'
import { PrismaService } from 'src/prisma/prisma.service'
// import { Prisma } from '@prisma/client'

@Injectable()
export class TeamsService {
  constructor(private prisma: PrismaService) {}

  create(createTeamDto: CreateTeamDto) {
    return 'This action adds a new team'
  }

  findAll() {
    return this.prisma.teams.findMany()
    // return `This action returns all teams`
  }

  findOne(id: number) {
    return `This action returns a #${id} team`
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`
  }

  remove(id: number) {
    return `This action removes a #${id} team`
  }
}
