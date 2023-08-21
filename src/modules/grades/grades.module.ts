import { Module } from '@nestjs/common';

import { GradesController } from '../../controllers/grades/grades.controller';
import { GradesService } from '../../services/grades/grades.service';
import PrismaService from '@/services/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [GradesController],
  providers: [GradesService, PrismaService],
})
export class GradesModule {}

export default GradesModule;
