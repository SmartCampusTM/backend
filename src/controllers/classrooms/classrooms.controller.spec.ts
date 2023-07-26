import { Test } from '@nestjs/testing';

import { Classroom } from '@prisma/client';

import { ClassroomsController } from '@controllers/classrooms/classrooms.controller';

import { ClassroomsService } from '@services/classrooms/classrooms.service';

import { classroomStub } from '../../../test/stubs/classroom.stub';
import { UpdateClassroomDto } from '@/modules/classrooms/dtos/update-classroom.dto';

jest.mock('@services/classrooms/classrooms.service');

describe('ClassroomsController', () => {
  let controller: ClassroomsController;
  let service: ClassroomsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [ClassroomsController],
      providers: [ClassroomsService],
    }).compile();

    controller = moduleRef.get<ClassroomsController>(ClassroomsController);
    service = moduleRef.get<ClassroomsService>(ClassroomsService);
    jest.clearAllMocks();
  });

  describe('createClassroom', () => {
    describe('when createClassroom is called', () => {
      let classroom: Classroom | null;

      beforeEach(async () => {
        classroom = await controller.create(classroomStub());
      });

      test('then it should call classroomsService', () => {
        expect(service.createClassroom).toBeCalledWith(classroomStub());
      });

      test('then it should return the classroom', () => {
        expect(classroom).toEqual(classroomStub());
      });
    });
  });

  describe('classrooms', () => {
    describe('when classrooms is called', () => {
      let classrooms: Classroom[] | null;

      beforeEach(async () => {
        classrooms = await controller.findAll();
      });

      test('then it should call classroomsService', () => {
        expect(service.classrooms).toHaveBeenCalled();
      });

      test('then it should return all classrooms', () => {
        expect(classrooms).toEqual([classroomStub()]);
      });
    });
  });

  describe('findClassroom', () => {
    describe('when findClassroom is called', () => {
      let classroom: Classroom | null;

      beforeEach(async () => {
        classroom = await controller.findOne(classroomStub().id);
      });

      test('then it should call classroomsService', () => {
        expect(service.findClassroom).toHaveBeenCalledWith(classroomStub().id);
      });

      test('then it should return the classroom', () => {
        expect(classroom).toEqual(classroomStub());
      });
    });
  });

  describe('updateClassroom', () => {
    describe('when updateClassroom is called', () => {
      let updateClassroomDto: UpdateClassroomDto;
      let classroom: Classroom | null;

      beforeEach(async () => {
        updateClassroomDto = {
          name: 'L69',
          number: 69,
        };
        classroom = await controller.update(
          classroomStub().id,
          updateClassroomDto,
        );
      });

      test('then it should call classroomsService', () => {
        expect(service.updateClassroom).toHaveBeenCalledWith(
          classroomStub().id,
          updateClassroomDto,
        );
      });

      test('then it should return the updated classroom', () => {
        expect(classroom).toEqual(classroomStub());
      });
    });
  });

  describe('deleteClassroom', () => {
    describe('when deleteClassroom is called', () => {
      let message: string;

      beforeEach(async () => {
        message = await controller.delete(classroomStub().id);
      });

      test('then it should call classroomsService', () => {
        expect(service.deleteClassroom).toBeCalledWith(classroomStub().id);
      });

      test('then it should return a string', () => {
        expect(message).toEqual('Classroom deleted');
      });
    });
  });
});
