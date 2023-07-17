import { UsersService } from './../../services/users/users.service';
import { UsersController } from '@/controllers/users/users.controller';
import { PrismaService } from '@/services/prisma/prisma.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})
export class UsersModule {}
