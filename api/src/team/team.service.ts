import { Injectable } from '@nestjs/common'
import { CreateTeamDto } from './dto/create-team.dto'
import { UpdateTeamDto } from './dto/update-team.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}

  create(createTeamDto: CreateTeamDto) {
    return 'This action adds a new team'
  }

  async findAll() {
    const teams = await this.prisma.teams.findMany()
    return teams
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
