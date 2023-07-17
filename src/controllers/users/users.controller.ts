import { UsersService } from '@/services/users/users.service';
import { Controller, Get, Header } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // CREATE: POST /users/ -> body: { email: string, name: string,  password: string }
  // READ: GET /users/:id -> params: { id: string }
  // UPDATE: PUT /users/:id -> params: { id: string }, body: { email?: string, name?: string,  password?: string }
  // DELETE: DELETE /users/:id -> params: { id: string }
  // Auth header: Authorization: Bearer <token>

  @Get()
  @Header('Content-Type', 'application/json')
  async getUsers(): Promise<object[]> {
    const users = await this.usersService.getUsers();
    return users;
  }
}
