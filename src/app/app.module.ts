import { Module } from '@nestjs/common';

import AppController from '@/app/app.controller';
import UsersController from '@/users/users.controller';

import AppService from '@/app/app.service';
import PrismaService from '@/prisma/prisma.service';
import UsersService from '@/users/users.service';

@Module({
  controllers: [AppController, UsersController],
  providers: [AppService, PrismaService, UsersService],
})
export default class AppModule {}
