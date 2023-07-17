import { Module } from '@nestjs/common';

import { UsersController } from '@controllers/users/users.controller';

import { PrismaService } from '@services/prisma/prisma.service';
import { UsersService } from '@services/users/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})
export class UsersModule {}
