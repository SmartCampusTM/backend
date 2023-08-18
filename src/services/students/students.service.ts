/*
https://docs.nestjs.com/providers#services
*/

import {
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
  Patch,
  Post,
} from '@nestjs/common';

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
    return await this.prisma.student.create({
      data: createStudentDto,
    });
  }

  //read
  
  async students(): Promise<Student[] | null>{
    return await this.prisma.student.findMany();
  }


  // return one student
  async findStudent(id :string): Promise<Student | null>{
   try {
     return this.prisma.student.findUnique({
       where: {
         id: id,
       },
     });
   } catch (error) {
     if (error instanceof Prisma.PrismaClientKnownRequestError) {
       throw new HttpException(
         {
           status:
             error.code == 'P2023'
               ? HttpStatus.BAD_REQUEST
               : HttpStatus.INTERNAL_SERVER_ERROR,
           error:
             error.code == 'P2023'
               ? error.meta?.message
               : 'Internal server error',
         },
         HttpStatus.NOT_FOUND,
       );
     }

     throw error;
   }
  }
  //update

  async updateStudent(id: string,
    updateStudentDto: UpdateStudentDto): Promise<Student | null>{
   const newStudent = { ...updateStudentDto };
   console.log(newStudent);
   return await this.prisma.student.update({
     where: {
       id: id,
     },
     data: newStudent,
   });
  }
  //delete

  async deleteStudent(id: string): Promise<string>{
    await this.prisma.student.delete({
      where: {
        id: id,
      },
  });

  return 'Student deleted';
  }
}
