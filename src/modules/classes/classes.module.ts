import { Module } from '@nestjs/common';

import { ClassesController } from '@/controllers/classes/classes.controller';
import { ClassesService } from '@/services/classes/classes.service';

@Module({
  imports: [],
  controllers: [ClassesController],
  providers: [ClassesService],
})
export class ClassesModule {}
