import { Module } from '@nestjs/common';

import { TeachersController } from './../../controllers/teachers/teachers.controller';
import { TeachersService } from './../../services/teachers/teachers.service';
import { PrismaService } from '@/services/prisma/prisma.service';

@Module({
  controllers: [TeachersController],
  providers: [TeachersService, PrismaService],
})
export class TeachersModule {}
