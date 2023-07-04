import { UsersService } from '@/services/users/users.service';
import { Controller, Get, Header } from '@nestjs/common';

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    
    @Get()
    @Header("Content-Type", "application/json")
    getDefault(): { message: string } {
        return this.usersService.default();
    }
}
