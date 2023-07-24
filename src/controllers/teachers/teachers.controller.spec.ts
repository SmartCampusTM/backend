import { Test } from '@nestjs/testing';

import { Teacher } from '@prisma/client';

import { TeachersController } from '@controllers/teachers/teachers.controller';

import { TeachersService } from '@services/teachers/teachers.service';

import { teacherStub } from '../../../test/stubs/teacher.stub';
import { UpdateTeacherDto } from '@/modules/teachers/dtos/update-teacher.dto';

jest.mock('@services/teachers/teachers.service');

describe('TeachersController', () => {
  let controller: TeachersController;
  let service: TeachersService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [TeachersController],
      providers: [TeachersService],
    }).compile();

    controller = moduleRef.get<TeachersController>(TeachersController);
    service = moduleRef.get<TeachersService>(TeachersService);
    jest.clearAllMocks();
  });

  describe('createTeacher', () => {
    describe('when createTeacher is called', () => {
      let teacher: Teacher | null;

      beforeEach(async () => {
        teacher = await controller.create(teacherStub());
      });

      test('then it should call teachersService', () => {
        expect(service.createTeacher).toBeCalledWith(teacherStub());
      });

      test('then it should return a teacher', () => {
        expect(teacher).toEqual(teacherStub());
      });
    });
  });

  describe('teachers', () => {
    describe('when teachers is called', () => {
      let teachers: Teacher[] | null;

      beforeEach(async () => {
        teachers = await controller.findAll();
      });

      test('then it should call teachersService', () => {
        expect(service.teachers).toHaveBeenCalled();
      });

      test('then it should return a array of teachers', () => {
        expect(teachers).toEqual([teacherStub()]);
      });
    });
  });

  describe('findTeacher', () => {
    describe('when findTeacher is called', () => {
      let teacher: Teacher | null;

      beforeEach(async () => {
        teacher = await controller.findOne(teacherStub().id);
      });

      test('then it should call teachersService', () => {
        expect(service.findTeacher).toBeCalledWith(teacherStub().id);
      });

      test('then it should return a teacher', () => {
        expect(teacher).toEqual(teacherStub());
      });
    });
  });

  describe('updateTeacher', () => {
    describe('when updateTeacher is called', () => {
      let updateTeacherDto: UpdateTeacherDto;
      let teacher: Teacher | null;

      beforeEach(async () => {
        updateTeacherDto = {
          name: 'John',
          lastName: 'Wick',
        };
        teacher = await controller.update(teacherStub().id, updateTeacherDto);
      });

      test('then it should call teachersService', () => {
        expect(service.updateTeacher).toBeCalledWith(
          teacherStub().id,
          updateTeacherDto,
        );
      });

      test('then it should return a teacher', () => {
        expect(teacher).toEqual(teacherStub());
      });
    });
  });

  describe('deleteTeacher', () => {
    describe('when deleteTeacher is called', () => {
      let message: string;

      beforeEach(async () => {
        message = await controller.delete(teacherStub().id);
      });

      test('then it should call teachersService', () => {
        expect(service.deleteTeacher).toBeCalledWith(teacherStub().id);
      });

      test('then it should return a string', () => {
        expect(message).toEqual('Teacher deleted');
      });
    });
  });
});
