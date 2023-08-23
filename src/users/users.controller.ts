import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  ValidationPipe,
  Query,
} from '@nestjs/common';

import { User } from '@prisma/client';

import UsersService from '@/users/users.service';

import CreateUserDto from '@/users/dtos/create-user.dto';
import UpdateUserDto from '@/users/dtos/update-user.dto';

@Controller('users')
export default class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(
    @Body(new ValidationPipe()) createUserDto: CreateUserDto,
  ): Promise<User | null> {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  async findAll(@Query('email') email?: string): Promise<User | User[] | null> {
    return email
      ? this.usersService.findUserByEmail(email)
      : this.usersService.users();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User | null> {
    return this.usersService.findUser(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User | null> {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<string> {
    return this.usersService.deleteUser(id);
  }
}
