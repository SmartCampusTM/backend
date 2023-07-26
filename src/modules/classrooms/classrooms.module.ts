import { Module } from '@nestjs/common';

import { ClassroomsController } from './../../controllers/classrooms/classrooms.controller';
import { ClassroomsService } from './../../services/classrooms/classrooms.service';
import { PrismaService } from '@/services/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [ClassroomsController],
  providers: [ClassroomsService, PrismaService],
})
export class ClassroomsModule {}
