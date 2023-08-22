import { Test, TestingModule } from '@nestjs/testing';

import ClassesService from '@/classes/classes.service';
import PrismaService from '@/prisma/prisma.service';

describe('ClassesService', () => {
  let service: ClassesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassesService, PrismaService],
    }).compile();

    service = module.get<ClassesService>(ClassesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
