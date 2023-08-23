import { Test, TestingModule } from '@nestjs/testing';

import ClassroomsService from '@/classrooms/classrooms.service';
import PrismaService from '@/prisma/prisma.service';

describe('ClassroomsService', () => {
  let service: ClassroomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassroomsService, PrismaService],
    }).compile();

    service = module.get<ClassroomsService>(ClassroomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
