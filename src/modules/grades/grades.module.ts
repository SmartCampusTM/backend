import { Module } from '@nestjs/common';

import { GradesController } from '../../controllers/grades/grades.controller';
import { GradesService } from '../../services/grades/grades.service';

@Module({
  imports: [],
  controllers: [GradesController],
  providers: [GradesService],
})
export class GradesModule {}

export default GradesModule;
