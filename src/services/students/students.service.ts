import { HttpException, HttpStatus, Injectable, Post } from '@nestjs/common';

import { Prisma, Student } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentDto } from '@/modules/students/dtos/create-student.dto';
import { UpdateStudentDto } from '@/modules/students/dtos/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(private readonly prisma: PrismaService) {}

  @Post()
  async createStudent(
    createStudentDto: CreateStudentDto,
  ): Promise<Student | null> {
    return this.prisma.student.create({
      data: createStudentDto,
    });
  }

  async students(): Promise<Student[] | null> {
    return this.prisma.student.findMany();
  }

  async findStudent(id: string): Promise<Student | null> {
    try {
      return await this.prisma.student.findUnique({
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

  async updateStudent(
    id: string,
    updateStudentDto: UpdateStudentDto,
  ): Promise<Student | null> {
    const newStudent = { ...updateStudentDto };
    return this.prisma.student.update({
      where: {
        id,
      },
      data: newStudent,
    });
  }

  async deleteStudent(id: string): Promise<string> {
    await this.prisma.student.delete({
      where: {
        id,
      },
    });

    return 'Student deleted';
  }
}

export default StudentsService;
