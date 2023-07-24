/*
https://docs.nestjs.com/providers#services
*/

import { Delete, Get, Injectable, Patch, Post } from '@nestjs/common';

import { Student } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentDto } from '@/modules/students/dtos/create-student.dto';

@Injectable()
export class StudentsService {
  constructor(private readonly prisma: PrismaService) {}

  @Post()
  async createStudent(
    createStudentDto: CreateStudentDto,
  ): Promise<Student | null> {
    return await this.prisma.student.create({
      data: createStudentDto,
    });
  }

  @Get()
  students(): string {
    return 'OK';
  }

  @Get()
  findStudent(): string {
    return 'OK';
  }

  @Patch()
  updateStudent(): string {
    return 'OK';
  }

  @Delete()
  deleteStudent(): string {
    return 'OK';
  }
}
