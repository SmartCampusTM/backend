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

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  async getUsersGet(): Promise<object[]> {
    const users = await this.usersService.getUsers();
    return users;
  }

  @Post()
  @HttpCode(201)
  addUser(): object[] {
    return [
      {
        id: '3b68d9d3-e9a2-4c4a-b2d6-6d5a3201f717',
        email: 'john.doe@smartcampus.com',
        name: 'John',
        lastname: 'Doe',
        password: '?HY#:}{e',
        'profile-picture': 'https://assets.smartcampus.com/users/Abc12Xyz.jpg',
        permission: 'admin',
        'date-of-birth': '2001-03-21',
        adress: {
          street: '258 Fairview Blvd',
          city: 'Hempstead',
          state: 'New York',
          zipcode: '11550',
          country: 'United States',
        },
        'creation-time': '1689603030',
        'update-time': '1689603030',
      },
    ];
  }

  @Get(':id')
  getUser(@Param('id') id: string): { message: string } {
    return { message: `User ${id} found` };
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
