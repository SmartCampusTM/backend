import { UsersService } from './../../services/users/users.service';
import { UsersController } from '@/controllers/users/users.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
