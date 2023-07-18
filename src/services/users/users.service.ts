import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { User } from '@prisma/client';

import { PrismaService } from '@services/prisma/prisma.service';

import { CreateUserDto } from '@/modules/users/dtos/create-user.dto';
import { UpdateUserDto } from '@/modules/users/dtos/update-user.dto';

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
          status:
            error.code == 'P2023'
              ? HttpStatus.BAD_REQUEST
              : HttpStatus.INTERNAL_SERVER_ERROR,
          error:
            error.code == 'P2023'
              ? error.meta.message
              : 'Internal server error',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async updateUser(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User | null> {
    const newUser = { ...updateUserDto };
    console.log(newUser);
    return await this.prisma.user.update({
      where: {
        id: id,
      },
      data: newUser,
    });
  }

  async deleteUser(id: string): Promise<string> {
    await this.prisma.user.delete({
      where: {
        id: id,
      },
    });

    return 'User deleted';
  }
}
