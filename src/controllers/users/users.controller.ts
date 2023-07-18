import { CreateUserDto } from '@/modules/users/dtos/create-user.dto';
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
  @Header('Content-Type', 'application/json')
  async findAll(): Promise<User[] | null> {
    return await this.usersService.users();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User | null> {
    return this.usersService.findUser(id);
  }

  @Patch(':id')
  @HttpCode(200)
  update(): string {
    return 'OK';
  }

  @Delete(':id')
  delete(): string {
    return 'OK';
  }
}
