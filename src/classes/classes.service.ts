import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { Class, Prisma } from '@prisma/client';

import PrismaService from '@/prisma/prisma.service';

import CreateClassDto from '@/classes/dtos/create-class.dto';
import UpdateClassDto from '@/classes/dtos/update-class.dto';

@Injectable()
export default class ClassesService {
  constructor(private readonly prisma: PrismaService) {}

  async createClass(createClassDto: CreateClassDto): Promise<Class | null> {
    return this.prisma.class.create({
      data: createClassDto,
    });
  }

  async classes(): Promise<Class[] | null> {
    return this.prisma.class.findMany();
  }

  async findClass(id: string): Promise<Class | null> {
    try {
      return await this.prisma.class.findUnique({
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

  async updateClass(
    id: string,
    updateClassDto: UpdateClassDto,
  ): Promise<Class | null> {
    return this.prisma.class.update({
      where: {
        id,
      },
      data: updateClassDto,
    });
  }

  async deleteClass(id: string): Promise<string> {
    await this.prisma.class.delete({
      where: {
        id,
      },
    });

    return 'Class deleted';
  }
}
