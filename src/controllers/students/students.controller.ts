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
  findAllStudents(): string {
    return this.studentsService.students();
  }

  @Get()
  findStudent(): string {
    return this.studentsService.findStudent();
  }

   @Patch()
   updateStudent(): string {
        return this.studentsService.updateStudent();
    }

    @Delete()
    deleteStudent(): string {
        return this.studentsService.deleteStudent();
    }


}
