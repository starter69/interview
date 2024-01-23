import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { HelloWorldController } from './hello-world/hello-world.controller'

import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { PrismaModule } from './prisma/prisma.module'

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		AuthModule,
		UserModule,
		PrismaModule,
	],
	controllers: [AppController, HelloWorldController],
	providers: [AppService],
})
export class AppModule {}
