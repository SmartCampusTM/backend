import { Test } from '@nestjs/testing';

import AppController from '@/app/app.controller';

import AppService from '@/app/app.service';

jest.mock('@/app/app.service');

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

  describe('sendHeartbeat', () => {
    describe('when sendHeartbeat is called', () => {
      let hello: string;

      beforeEach(async () => {
        hello = await controller.HelloWorld();
      });

      test('then it should call AppService', () => {
        expect(service.sendHeartbeat).toHaveBeenCalled();
      });

      test("then it should return an 'OK' string", () => {
        expect(hello).toEqual('OK');
      });
    });
  });
});
