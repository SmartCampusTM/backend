import { GradesService } from './../../services/grades/grades.service';
import { GradesController } from './../../controllers/grades/grades.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [GradesController],
  providers: [GradesService],
})
export class GradesModule {}
