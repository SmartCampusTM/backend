/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

import { StudentsController } from '@/controllers/students/students.controller';
import { PrismaService } from '@/services/prisma/prisma.service';
import { StudentsService } from '@/services/students/students.service';

@Module({
  imports: [],
  controllers: [StudentsController],
  providers: [StudentsService, PrismaService],
})
export class StudentModule {}
