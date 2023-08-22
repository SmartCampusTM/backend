import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { Classroom, Prisma } from '@prisma/client';

import PrismaService from '@/prisma/prisma.service';

import CreateClassroomDto from '@/classrooms/dtos/create-classroom.dto';
import UpdateClassroomDto from '@/classrooms/dtos/update-classroom.dto';

@Injectable()
export default class ClassroomsService {
  constructor(private readonly prisma: PrismaService) {}

  async createClassroom(
    createClassroomDto: CreateClassroomDto,
  ): Promise<Classroom | null> {
    return this.prisma.classroom.create({
      data: createClassroomDto,
    });
  }

  async classrooms(): Promise<Classroom[] | null> {
    return this.prisma.classroom.findMany();
  }

  async findClassroom(id: string): Promise<Classroom | null> {
    try {
      return await this.prisma.classroom.findUnique({
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

  async updateClassroom(
    id: string,
    updateClassroomDto: UpdateClassroomDto,
  ): Promise<Classroom | null> {
    return this.prisma.classroom.update({
      where: {
        id,
      },
      data: updateClassroomDto,
    });
  }

  async deleteClassroom(id: string): Promise<string> {
    await this.prisma.classroom.delete({
      where: {
        id,
      },
    });

    return 'Classroom deleted';
  }
}
