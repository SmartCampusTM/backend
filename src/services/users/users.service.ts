import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { Prisma, User } from '@prisma/client';

import { PrismaService } from '@services/prisma/prisma.service';

import { CreateUserDto } from '@/modules/users/dtos/create-user.dto';
import { UpdateUserDto } from '@/modules/users/dtos/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto): Promise<User | null> {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  async users(): Promise<User[] | null> {
    return this.prisma.user.findMany();
  }

  async findUser(id: string): Promise<User | null> {
    try {
      return await this.prisma.user.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException(
          {
            status:
              error.code === 'P2023'
                ? HttpStatus.BAD_REQUEST
                : HttpStatus.INTERNAL_SERVER_ERROR,
            error:
              error.code === 'P2023'
                ? error.meta?.message
                : 'Internal server error',
          },
          HttpStatus.NOT_FOUND,
        );
      }

      throw error;
    }
  }

  async updateUser(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User | null> {
    const newUser = { ...updateUserDto };
    return this.prisma.user.update({
      where: {
        id,
      },
      data: newUser,
    });
  }

  async deleteUser(id: string): Promise<string> {
    await this.prisma.user.delete({
      where: {
        id,
      },
    });

    return 'User deleted';
  }
}

export default UsersService;
