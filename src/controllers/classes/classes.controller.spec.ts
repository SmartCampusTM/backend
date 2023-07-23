import { Test } from '@nestjs/testing';

import { Class } from '@prisma/client';

import { ClassesController } from '@controllers/classes/classes.controller';

import { ClassesService } from '@services/classes/classes.service';

import { classStub } from '../../../test/stubs/class.stub';
import { UpdateClassDto } from '@/modules/classes/dtos/update-class.dto';

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
      let aClass: Class | null;

      beforeEach(async () => {
        aClass = await controller.create(classStub());
      });

      test('then it should call classesService', () => {
        expect(service.createClass).toBeCalledWith(classStub());
      });

      test('then it should return the class', () => {
        expect(aClass).toEqual(classStub());
      });
    });
  });

  describe('classes', () => {
    describe('when classes is called', () => {
      let classes: Class[] | null;

      beforeEach(async () => {
        classes = await controller.findAll();
      });

      test('then it should call classesService', () => {
        expect(service.classes).toHaveBeenCalled();
      });

      test('then it should return all classes', () => {
        expect(classes).toEqual([classStub()]);
      });
    });
  });

  describe('findClass', () => {
    describe('when findClass is called', () => {
      let aClass: Class | null;

      beforeEach(async () => {
        aClass = await controller.findOne(classStub().id);
      });

      test('then it should call classesService', () => {
        expect(service.findClass).toHaveBeenCalledWith(classStub().id);
      });

      test('then it should return the class', () => {
        expect(aClass).toEqual(classStub());
      });
    });
  });

  describe('updateClass', () => {
    describe('when updateClass is called', () => {
      let updateClassDto: UpdateClassDto;
      let aClass: Class | null;

      beforeEach(async () => {
        updateClassDto = {
          name: 'English',
          description: 'English is also important',
        };
        aClass = await controller.update(classStub().id, updateClassDto);
      });

      test('then it should call classesService', () => {
        expect(service.updateClass).toHaveBeenCalledWith(
          classStub().id,
          updateClassDto,
        );
      });

      test('then it should return the updated class', () => {
        expect(aClass).toEqual(classStub());
      });
    });
  });

  describe('deleteClass', () => {
    describe('when deleteClass is called', () => {
      let message: string;

      beforeEach(async () => {
        message = await controller.delete(classStub().id);
      });

      test('then it should call classService', () => {
        expect(service.deleteClass).toBeCalledWith(classStub().id);
      });

      test('then it should return a string', () => {
        expect(message).toEqual('Class deleted');
      });
    });
  });
});
