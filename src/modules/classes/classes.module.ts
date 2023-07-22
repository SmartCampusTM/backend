import { Module } from '@nestjs/common';

import { ClassesController } from '@/controllers/classes/classes.controller';
import { ClassesService } from '@/services/classes/classes.service';
import { PrismaService } from '@/services/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [ClassesController],
  providers: [ClassesService, PrismaService],
})
export class ClassesModule {}
