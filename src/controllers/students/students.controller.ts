/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';

import { Student } from '@prisma/client';

import { CreateStudentDto } from '@/modules/students/dtos/create-student.dto';
import { UpdateStudentDto } from '@/modules/students/dtos/update-student.dto';
import { StudentsService } from '@/services/students/students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(
    @Body(new ValidationPipe()) createStudentDto: CreateStudentDto,
  ): Promise<Student | null> {
    return this.studentsService.createStudent(createStudentDto);
  }
  @Get()
  findAll(): string {
    return this.studentsService.students();
  }

  @Get()
  findOne(): string {
    return this.studentsService.findStudent();
  }

  @Patch()
  update(): string {
    return this.studentsService.updateStudent();
  }

  @Delete()
  deleteStudent(): string {
    return this.studentsService.deleteStudent();
  }

  @Delete()
  delete(id: string): string {
    return this.studentsService.deleteStudent();
  }
}
