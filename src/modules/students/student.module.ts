/*
https://docs.nestjs.com/modules
*/

import { AppController } from '@/controllers/app/app.controller';
import { StudentsController } from '@/controllers/students/students.controller';
import { AppService } from '@/services/app/__mocks__/app.service';
import { PrismaService } from '@/services/prisma/prisma.service';
import { StudentsService } from '@/services/students/students.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [StudentsController],
  providers: [StudentsService, PrismaService],
})
export class StudentModule {}
