import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
  async getUsers(): Promise<object[]> {
    const allUsers = await prisma.user.findMany();
    return allUsers;
  }
}