import { Module } from '@nestjs/common';

import ClassesController from '@/classes/classes.controller';

import ClassesService from '@/classes/classes.service';
import PrismaService from '@/prisma/prisma.service';

@Module({
  controllers: [ClassesController],
  providers: [ClassesService, PrismaService],
})
export default class ClassesModule {}
