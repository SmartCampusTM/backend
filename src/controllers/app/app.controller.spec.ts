import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from '@controllers/app/app.controller';

import { AppService } from '@/services/app/app.service';
import * as request from 'supertest';

jest.mock('@services/app/app.service');

describe('AppController', () => {
  let controller: AppController;
  let service: AppService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    controller = moduleRef.get<AppController>(AppController);
    service = moduleRef.get<AppService>(AppService);
    jest.clearAllMocks();
  });

  describe('getHello', () => {
    describe('when getHello is called', () => {
      let hello: string;

      beforeEach(async () => {
        hello = await controller.HelloWorld();
      });

      test('then it should call AppService', () => {
        expect(service.getHello).toHaveBeenCalled();
      });

      test('then it should return a \'Hello World\' string', () => {
        expect(hello).toEqual('Hello World');
      });
    })
  })
});
