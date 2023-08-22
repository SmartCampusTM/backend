import { Module } from '@nestjs/common';

import ClassroomsController from '@/classrooms/classrooms.controller';

import ClassroomsService from '@/classrooms/classrooms.service';
import PrismaService from '@/prisma/prisma.service';

@Module({
  controllers: [ClassroomsController],
  providers: [ClassroomsService, PrismaService],
})
export default class ClassroomsModule {}
