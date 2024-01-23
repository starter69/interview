import { PrismaClient, Role } from '@prisma/client'
import * as argon from 'argon2'

const prisma = new PrismaClient()

async function main() {
	const teamArray = []

	// Teams

	for (let i = 1; i <= 9; i++) {
		teamArray.push(`Team ${i}`)
	}
	teamArray.push('Admins')

	for (const [index, record] of teamArray.entries()) {
		await prisma.teams.create({ data: { id: index + 1, name: record } })
	}

	// Users
	const userArray = [
		//admins
		{
			id: 1,
			name: 'stronghold',
			password: '12345678',
			team_id: 10,
			role: Role.ADMIN,
		},
		{
			id: 2,
			name: 'wizard',
			password: '12345678',
			team_id: 10,
			role: Role.ADMIN,
		},
		// team 1 =>
		{
			id: 3,
			name: 'jeyson',
			password: '12345678',
			team_id: 1,
			role: Role.LEAD,
		},
		{
			id: 4,
			name: 'marshal',
			password: '12345678',
			team_id: 1,
			role: Role.USER,
		},
		{
			id: 5,
			name: 'eagle',
			password: '12345678',
			team_id: 1,
			role: Role.USER,
		},
		{
			id: 6,
			name: 'elite',
			password: '12345678',
			team_id: 1,
			role: Role.USER,
		},
		{
			id: 7,
			name: 'cupid',
			password: '12345678',
			team_id: 1,
			role: Role.USER,
		},
		// team 2 =>
		{
			id: 8,
			name: 'tom',
			password: '12345678',
			team_id: 2,
			role: Role.LEAD,
		},
		{
			id: 9,
			name: 'snoopy',
			password: '12345678',
			team_id: 2,
			role: Role.USER,
		},
		{
			id: 10,
			name: 'fred',
			password: '12345678',
			team_id: 2,
			role: Role.USER,
		},
		{
			id: 11,
			name: 'seawolf',
			password: '12345678',
			team_id: 2,
			role: Role.USER,
		},
		{
			id: 12,
			name: 'cook',
			password: '12345678',
			team_id: 2,
			role: Role.USER,
		},
		// team 3 =>
		{
			id: 13,
			name: 'starter',
			password: '12345678',
			team_id: 3,
			role: Role.LEAD,
		},
		{
			id: 14,
			name: 'tony',
			password: '12345678',
			team_id: 3,
			role: Role.USER,
		},
		{
			id: 15,
			name: 'dragon',
			password: '12345678',
			team_id: 3,
			role: Role.USER,
		},
		{
			id: 16,
			name: 'bear',
			password: '12345678',
			team_id: 3,
			role: Role.USER,
		},
		{
			id: 17,
			name: 'stein',
			password: '12345678',
			team_id: 3,
			role: Role.USER,
		},
		// team 4 =>
		{
			id: 18,
			name: 'harry',
			password: '12345678',
			team_id: 4,
			role: Role.LEAD,
		},
		{
			id: 19,
			name: 'dennis',
			password: '12345678',
			team_id: 4,
			role: Role.USER,
		},
		{
			id: 20,
			name: 'hades',
			password: '12345678',
			team_id: 4,
			role: Role.USER,
		},
		{
			id: 21,
			name: 'venus',
			password: '12345678',
			team_id: 4,
			role: Role.USER,
		},
		// team 5 =>
		{
			id: 22,
			name: 'aurora',
			password: '12345678',
			team_id: 5,
			role: Role.LEAD,
		},
		{
			id: 23,
			name: 'elijah',
			password: '12345678',
			team_id: 5,
			role: Role.USER,
		},
		{
			id: 24,
			name: 'rabbit',
			password: '12345678',
			team_id: 5,
			role: Role.USER,
		},
		{
			id: 25,
			name: 'ghost',
			password: '12345678',
			team_id: 5,
			role: Role.USER,
		},
		{
			id: 26,
			name: 'shoot',
			password: '12345678',
			team_id: 5,
			role: Role.USER,
		},
		// team 6 =>
		{
			id: 27,
			name: 'ted',
			password: '12345678',
			team_id: 6,
			role: Role.LEAD,
		},
		{
			id: 28,
			name: 'goldhill',
			password: '12345678',
			team_id: 6,
			role: Role.USER,
		},
		{
			id: 29,
			name: 'super',
			password: '12345678',
			team_id: 6,
			role: Role.USER,
		},
		{
			id: 30,
			name: 'vicent',
			password: '12345678',
			team_id: 6,
			role: Role.USER,
		},
		{
			id: 31,
			name: 'erik',
			password: '12345678',
			team_id: 6,
			role: Role.USER,
		},
		// team 7 =>
		{
			id: 32,
			name: 'shiny',
			password: '12345678',
			team_id: 7,
			role: Role.LEAD,
		},
		{
			id: 33,
			name: 'gru',
			password: '12345678',
			team_id: 7,
			role: Role.USER,
		},
		{
			id: 34,
			name: 'gondar',
			password: '12345678',
			team_id: 7,
			role: Role.USER,
		},
		{
			id: 35,
			name: 'knight',
			password: '12345678',
			team_id: 7,
			role: Role.USER,
		},
		{
			id: 36,
			name: 'achilles',
			password: '12345678',
			team_id: 7,
			role: Role.USER,
		},
		// team 8 =>
		{
			id: 37,
			name: 'napoleon',
			password: '12345678',
			team_id: 8,
			role: Role.LEAD,
		},
		{
			id: 38,
			name: 'fire',
			password: '12345678',
			team_id: 8,
			role: Role.USER,
		},
		{
			id: 39,
			name: 'bruno',
			password: '12345678',
			team_id: 8,
			role: Role.USER,
		},
		{
			id: 40,
			name: 'jenkins',
			password: '12345678',
			team_id: 8,
			role: Role.USER,
		},
		{
			id: 41,
			name: 'branch',
			password: '12345678',
			team_id: 8,
			role: Role.USER,
		},
		// team 9 =>
		{
			id: 42,
			name: 'caesar',
			password: '12345678',
			team_id: 9,
			role: Role.LEAD,
		},
		{
			id: 43,
			name: 'hunter',
			password: '12345678',
			team_id: 9,
			role: Role.USER,
		},
		{
			id: 44,
			name: 'sai',
			password: '12345678',
			team_id: 9,
			role: Role.USER,
		},
		{
			id: 45,
			name: 'hi',
			password: '12345678',
			team_id: 9,
			role: Role.USER,
		},
		{
			id: 46,
			name: 'sven',
			password: '12345678',
			team_id: 9,
			role: Role.USER,
		},
	]

	for (const user of userArray) {
		await prisma.users.create({
			data: {
				id: user.id,
				name: user.name,
				password: await argon.hash(user.password),
				team_id: user.team_id,
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
