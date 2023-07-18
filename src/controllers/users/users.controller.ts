import { UpdateCatDto } from '@/modules/cats/dtos/update-cat.dto';
import { CreateUserDto } from '@/modules/users/dtos/create-user.dto';
import { UpdateUserDto } from '@/modules/users/dtos/update-user.dto';
import {
  Controller,
  Get,
  Header,
  Patch,
  Param,
  Post,
  HttpCode,
  Delete,
  ValidationPipe,
  Body,
  ParseIntPipe,
} from '@nestjs/common';

import { User } from '@prisma/client';

import { UsersService } from '@services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createUserDto: CreateUserDto): Promise<User | null> {
    return await this.usersService.createUser(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[] | null> {
    return await this.usersService.users();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User | null> {
    return this.usersService.findUser(id);
  }

  @Patch(':id')
  @HttpCode(200)
  async update(@Param('id') id: string, @Body() UpdateUserDto: UpdateUserDto): Promise<User | null> {
    return this.usersService.updateUser(id, UpdateUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<String> {
    return this.usersService.deleteUser(id);
  }
}
