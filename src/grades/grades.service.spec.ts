import { Test, TestingModule } from '@nestjs/testing';

import GradesService from '@/grades/grades.service';
import PrismaService from '@/prisma/prisma.service';

describe('GradesService', () => {
  let service: GradesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GradesService, PrismaService],
    }).compile();

    service = module.get<GradesService>(GradesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
