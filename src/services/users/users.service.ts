import { Injectable } from '@nestjs/common';

import { User } from '@prisma/client';

import { PrismaService } from '@/services/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async users(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findUser(id: string): Promise<User | null> {
    try {
      return await this.prisma.user.findUnique({
        where: {
          id: id,
        },
      });
    } catch (e) {
      return null;
    }
  }
}
