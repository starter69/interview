import { PrismaClient, Role } from '@prisma/client'
import * as argon from 'argon2'

const prisma = new PrismaClient()

async function main() {
  const teamArray = []

  // Teams

  for (let i = 1; i <= 9; i++) {
    teamArray.push(`Team ${i}`)
  }

  for (const [index, record] of teamArray.entries()) {
    await prisma.teams.create({ data: { name: record } })
  }

  // Users
  const userArray = [
    //admins
    {
      name: 'stronghold',
      password: '12345678',
      role: Role.ADMIN,
    },
    {
      name: 'wizard',
      password: '12345678',
      role: Role.ADMIN,
    },
    // team 1 =>
    {
      name: 'jeyson',
      password: '12345678',
      team_id: 1,
      role: Role.LEAD,
    },
    {
      name: 'marshal',
      password: '12345678',
      team_id: 1,
      role: Role.USER,
    },
    {
      name: 'eagle',
      password: '12345678',
      team_id: 1,
      role: Role.USER,
    },
    {
      name: 'elite',
      password: '12345678',
      team_id: 1,
      role: Role.USER,
    },
    {
      name: 'cupid',
      password: '12345678',
      team_id: 1,
      role: Role.USER,
    },
    // team 2 =>
    {
      name: 'tom',
      password: '12345678',
      team_id: 2,
      role: Role.LEAD,
    },
    {
      name: 'snoopy',
      password: '12345678',
      team_id: 2,
      role: Role.USER,
    },
    {
      name: 'fred',
      password: '12345678',
      team_id: 2,
      role: Role.USER,
    },
    {
      name: 'seawolf',
      password: '12345678',
      team_id: 2,
      role: Role.USER,
    },
    {
      name: 'cook',
      password: '12345678',
      team_id: 2,
      role: Role.USER,
    },
    // team 3 =>
    {
      name: 'starter',
      password: '12345678',
      team_id: 3,
      role: Role.LEAD,
    },
    {
      name: 'tony',
      password: '12345678',
      team_id: 3,
      role: Role.USER,
    },
    {
      name: 'dragon',
      password: '12345678',
      team_id: 3,
      role: Role.USER,
    },
    {
      name: 'bear',
      password: '12345678',
      team_id: 3,
      role: Role.USER,
    },
    {
      name: 'stein',
      password: '12345678',
      team_id: 3,
      role: Role.USER,
    },
    // team 4 =>
    {
      name: 'harry',
      password: '12345678',
      team_id: 4,
      role: Role.LEAD,
    },
    {
      name: 'dennis',
      password: '12345678',
      team_id: 4,
      role: Role.USER,
    },
    {
      name: 'hades',
      password: '12345678',
      team_id: 4,
      role: Role.USER,
    },
    {
      name: 'venus',
      password: '12345678',
      team_id: 4,
      role: Role.USER,
    },
    // team 5 =>
    {
      name: 'aurora',
      password: '12345678',
      team_id: 5,
      role: Role.LEAD,
    },
    {
      name: 'elijah',
      password: '12345678',
      team_id: 5,
      role: Role.USER,
    },
    {
      name: 'rabbit',
      password: '12345678',
      team_id: 5,
      role: Role.USER,
    },
    {
      name: 'ghost',
      password: '12345678',
      team_id: 5,
      role: Role.USER,
    },
    {
      name: 'shoot',
      password: '12345678',
      team_id: 5,
      role: Role.USER,
    },
    // team 6 =>
    {
      name: 'ted',
      password: '12345678',
      team_id: 6,
      role: Role.LEAD,
    },
    {
      name: 'goldhill',
      password: '12345678',
      team_id: 6,
      role: Role.USER,
    },
    {
      name: 'super',
      password: '12345678',
      team_id: 6,
      role: Role.USER,
    },
    {
      name: 'vicent',
      password: '12345678',
      team_id: 6,
      role: Role.USER,
    },
    {
      name: 'erik',
      password: '12345678',
      team_id: 6,
      role: Role.USER,
    },
    // team 7 =>
    {
      name: 'shiny',
      password: '12345678',
      team_id: 7,
      role: Role.LEAD,
    },
    {
      name: 'gru',
      password: '12345678',
      team_id: 7,
      role: Role.USER,
    },
    {
      name: 'gondar',
      password: '12345678',
      team_id: 7,
      role: Role.USER,
    },
    {
      name: 'knight',
      password: '12345678',
      team_id: 7,
      role: Role.USER,
    },
    {
      name: 'achilles',
      password: '12345678',
      team_id: 7,
      role: Role.USER,
    },
    // team 8 =>
    {
      name: 'napoleon',
      password: '12345678',
      team_id: 8,
      role: Role.LEAD,
    },
    {
      name: 'fire',
      password: '12345678',
      team_id: 8,
      role: Role.USER,
    },
    {
      name: 'bruno',
      password: '12345678',
      team_id: 8,
      role: Role.USER,
    },
    {
      name: 'jenkins',
      password: '12345678',
      team_id: 8,
      role: Role.USER,
    },
    {
      name: 'branch',
      password: '12345678',
      team_id: 8,
      role: Role.USER,
    },
    // team 9 =>
    {
      name: 'caesar',
      password: '12345678',
      team_id: 9,
      role: Role.LEAD,
    },
    {
      name: 'hunter',
      password: '12345678',
      team_id: 9,
      role: Role.USER,
    },
    {
      name: 'sai',
      password: '12345678',
      team_id: 9,
      role: Role.USER,
    },
    {
      name: 'hi',
      password: '12345678',
      team_id: 9,
      role: Role.USER,
    },
    {
      name: 'sven',
      password: '12345678',
      team_id: 9,
      role: Role.USER,
    },
  ]

  for (const user of userArray) {
    await prisma.users.create({
      data: {
        name: user.name,
        password: await argon.hash(user.password),
        team_id: user.team_id ? user.team_id : undefined,
        role: user.role,
      },
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
