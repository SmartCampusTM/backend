import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';

import UsersModule from '@/users/users.module';

import AuthController from '@/auth/auth.controller';

import AuthService from '@/auth/auth.service';
import PrismaService from '@/prisma/prisma.service';
import UsersService from '@/users/users.service';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UsersModule, JwtModule],
      controllers: [AuthController],
      providers: [AuthService, UsersService, PrismaService],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
