import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from '@controllers/app/app.controller';

import { AppService } from '@/services/app/app.service';
import * as request from 'supertest';

describe('AppController', () => {
  let controller: AppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    controller = module.get<AppController>(AppController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('HelloWorld', () => {
    it('should return a status code of 200', () => {
      request(controller.HelloWorld()).get('/').expect(200);
    });
  });
});
