import { UsersService } from '@/services/users/users.service';
import {
  Controller,
  Get,
  Header,
  Patch,
  Param,
  Post,
  HttpCode,
  Delete,
} from '@nestjs/common';
import { User } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  async getUsers(): Promise<User[]> {
    return await this.usersService.users();
  }

  @Post()
  @HttpCode(201)
  createUser(): User[] {
    return [
      {
        id: '3b68d9d3-e9a2-4c4a-b2d6-6d5a3201f717',
        email: 'john.doe@smartcampus.com',
        name: 'John',
        lastName: 'Doe',
        password: '?HY#:}{e',
        profilePicture: 'https://assets.smartcampus.com/users/Abc12Xyz.jpg',
        permission: 'admin',
        dateOfBirth: new Date(Date.now()),
      },
    ];
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User | null> {
    return this.usersService.findUser(id);
  }

  @Patch(':id')
  @HttpCode(200)
  patchUser(): string {
    return 'OK';
  }

  @Delete(':id')
  deleteUser(): string {
    return 'OK';
  }
}
