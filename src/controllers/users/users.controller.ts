import { UsersService } from '@/services/users/users.service';
import { Controller, Get, Header, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  async getUsers(): Promise<object[]> {
    const users = await this.usersService.getUsers();
    return users;
  }

  @Get(':id')
  getUser(@Param('id') id: string): { message: string } {
    return { message: `User ${id} found` };
  }
}
