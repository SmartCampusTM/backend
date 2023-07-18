import { CreateUserDto } from '@/modules/users/dtos/create-user.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { User } from '@prisma/client';

import { PrismaService } from '@services/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto): Promise<User | null> {
    return await this.prisma.user.create({
      data: createUserDto,
    });
  }

  async users(): Promise<User[] | null> {
    return await this.prisma.user.findMany();
  }

  async findUser(id: string): Promise<User | null> {
    try { 
      return await this.prisma.user.findUnique({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'User not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
