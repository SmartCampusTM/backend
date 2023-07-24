/*
https://docs.nestjs.com/providers#services
*/

import { Delete, Get, Injectable, Patch, Post } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentDto } from '@/modules/students/dtos/create-student.dto';
import { Student } from '@prisma/client';


@Injectable()
export class StudentsService {
    constructor(private readonly prisma: PrismaService) {}
    //crud
    
    //create
    @Post()
    async createStudent(createStudentDto : CreateStudentDto): Promise<Student | null>  {
        return await this.prisma.student.create({
            data: createStudentDto,


        })
    }
    //read
    @Get()
    students(): string {
        return 'OK';
    }
    // return one student
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
    

}

