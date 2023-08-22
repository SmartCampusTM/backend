import { Module } from '@nestjs/common';

import UsersController from '@/users/users.controller';

import PrismaService from '@/prisma/prisma.service';
import UsersService from '@/users/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})
export default class UsersModule {}
