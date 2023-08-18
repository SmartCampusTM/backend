/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
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
  async create(
    @Body(new ValidationPipe()) createStudentsDto: CreateStudentDto,
  ): Promise<Student | null> {
    return this.studentsService.createStudent(createStudentsDto);
  }

  @Get()
  async findAll(): Promise<Student[] | null> {
    return this.studentsService.students();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Student | null> {
    return this.studentsService.findStudent(id);
  }

  @Patch(':id')
  @HttpCode(200)
  async update(
    @Param('id') id: string,
    @Body() updateStudentsDto: UpdateStudentDto,
  ): Promise<Student | null> {
    return this.studentsService.updateStudent(id, updateStudentsDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<string> {
    return this.studentsService.deleteStudent(id);
  }
}

export default StudentsController;
