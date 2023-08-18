/*
https://docs.nestjs.com/providers#services
*/

<<<<<<< HEAD
import { Delete, Get, HttpCode, HttpStatus, Injectable, Patch, Post } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentDto } from '@/modules/students/dtos/create-student.dto';
=======
import { Delete, Get, Injectable, Patch, Post } from '@nestjs/common';

>>>>>>> c2ce9c562a4629974c352fb3a72b0297f9028a88
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

<<<<<<< HEAD
        })
    }
    //read
    @HttpCode(200)
    @Get()
    students(): string {    
        return 'OK';
    }
    // return one student
    @HttpCode(200)
    @Get()
    findStudent(): string {
        return 'OK';
    }
    //update
    @Patch()
    updateStudent(): string {
        return 'OK';
    }
    //delete
    @Delete()
    deleteStudent(): string {
        return 'OK';
    }
    
=======
  @Get()
  students(): string {
    return 'OK';
  }
>>>>>>> c2ce9c562a4629974c352fb3a72b0297f9028a88

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