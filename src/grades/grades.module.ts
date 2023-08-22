import { Module } from '@nestjs/common';

import GradesController from '@/grades/grades.controller';

import GradesService from '@/grades/grades.service';
import PrismaService from '@/prisma/prisma.service';

@Module({
  controllers: [GradesController],
  providers: [GradesService, PrismaService],
})
export default class GradesModule {}
