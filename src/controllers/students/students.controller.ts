/*
https://docs.nestjs.com/controllers#controllers
*/

import { CreateStudentDto } from '@/modules/students/dtos/create-student.dto';
import { StudentsService } from '@/services/students/students.service';
import { Body, Controller, Delete, Get, Patch, Post, ValidationPipe } from '@nestjs/common';
import { Student } from '@prisma/client';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body(new ValidationPipe()) createStudentDto: CreateStudentDto): Promise<Student | null> {
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
   patch(): string {
        return this.studentsService.updateStudent();
    }

    @Delete()
    delete(): string {
        return this.studentsService.deleteStudent();
    }


}
