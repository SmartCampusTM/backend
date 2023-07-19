import { Test } from '@nestjs/testing';

import { ClassesService } from '@services/classes/classes.service';
import { ClassesController } from '@controllers/classes/classes.controller';

jest.mock('@services/classes/classes.service');

describe('ClassesController', () => {
  let controller: ClassesController;
  let service: ClassesService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [ClassesController],
      providers: [ClassesService],
    }).compile();

    controller = moduleRef.get<ClassesController>(ClassesController);
    service = moduleRef.get<ClassesService>(ClassesService);
    jest.clearAllMocks();
  });

  describe('createClass', () => {
    describe('when createClass is called', () => {
      let aClass: String;

      beforeEach(() => {
        aClass = controller.create();
      });

      test('then it should call classesService', () => {
        expect(service.createClass).toHaveBeenCalled();
      });

      test('then it should return a string', () => {
        expect(aClass).toEqual('OK');
      });
    });
  });

  describe('classes', () => {
    describe('when classes is called', () => {
      let aClass: string;

      beforeEach(() => {
        aClass = controller.findAll();
      });

      test('then it should call classesService', () => {
        expect(service.classes).toHaveBeenCalled();
      });

      test('then it should return a string', () => {
        expect(aClass).toEqual('OK');
      });
    });
  });

  describe('findClass', () => {
    describe('when findClass is called', () => {
      let aClass: string;

      beforeEach(() => {
        aClass = controller.findOne();
      });

      test('then it should call classesService', () => {
        expect(service.findClass).toHaveBeenCalled();
      });

      test('then it should return a string', () => {
        expect(aClass).toEqual('OK');
      });
    });
  });

  describe('updateClass', () => {
    describe('when updateClass is called', () => {
      let aClass: string;

      beforeEach(() => {
        aClass = controller.update();
      });

      test('then it should call classesService', () => {
        expect(service.updateClass).toHaveBeenCalled();
      });

      test('then it should return a string', () => {
        expect(aClass).toEqual('OK');
      });
    });
  });

  describe('deleteClass', () => {
    describe('when deleteClass is called', () => {
      let aClass: string;

      beforeEach(() => {
        aClass = controller.delete();
      });

      test('then it should call classService', () => {
        expect(service.deleteClass).toBeCalled();
      });

      test('then it should return a string', () => {
        expect(aClass).toEqual('OK');
      });
    });
  });
});
