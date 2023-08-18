import { Test } from '@nestjs/testing';

import { Student } from '@prisma/client';

import { StudentsController } from '@controllers/students/students.controller';

import { StudentsService } from '@services/students/students.service';

import { studentStub } from '../../../test/stubs/student.stub';
import { UpdateStudentDto } from '@modules/students/dtos/update-student.dto';

jest.mock('@services/students/students.service');

describe('StudentsController', () => {
  let controller: StudentsController;
  let service: StudentsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [StudentsController],
      providers: [StudentsService],
    }).compile();

    controller = moduleRef.get<StudentsController>(StudentsController);
    service = moduleRef.get<StudentsService>(StudentsService);
    jest.clearAllMocks();
  });

  describe('createStudent', () => {
    describe('when createStudent is called', () => {
      let student: Student | null;

      beforeEach(async () => {
        student = await controller.create(studentStub());
      });

      test('then it should call studentsService', () => {
        expect(service.createStudent).toBeCalledWith(studentStub());
      });

      test('then it should return a student', () => {
        expect(student).toEqual(studentStub());
      });
    });
  });

  describe('students', () => {
    describe('when students is called', () => {
      let students: Student[] | null;

      beforeEach(async () => {
        students = await controller.findAll();
      });

      test('then it should call studentsService', () => {
        expect(service.students).toHaveBeenCalled();
      });

      test('then it should return a student', () => {
        expect(students).toEqual([studentStub()]);
      });
    });
  });

  describe('findStudent', () => {
    describe('when findStudent is called', () => {
      let student: Student | null;

      beforeEach(async () => {
        student = await controller.findOne(studentStub().id);
      });

      test('then it should call studentsService', () => {
        expect(service.findStudent).toBeCalledWith(studentStub().id);
      });

      test('then it should return a student', () => {
        expect(student).toEqual(studentStub());
      });
    });
  });

  describe('updateStudent', () => {
    describe('when updateStudent is called', () => {
      let updateStudentDto: UpdateStudentDto;
      let student: Student | null;

      beforeEach(async () => {
        updateStudentDto = {
          name: 'John',
          lastName: 'Wick',
        };
        student = await controller.update(studentStub().id, updateStudentDto);
      });

      test('then it should call studentsService', () => {
        expect(service.updateStudent).toBeCalledWith(
          studentStub().id,
          updateStudentDto,
        );
      });

      test('then it should return a student', () => {
        expect(student).toEqual(studentStub());
      });
    });
  });

  describe('deleteStudent', () => {
    describe('when deleteStudent is called', () => {
      let message: string;

      beforeEach(async () => {
        message = await controller.delete(studentStub().id);
      });

      test('then it should call studentsService', () => {
        expect(service.deleteStudent).toBeCalledWith(studentStub().id);
      });

      test('then it should return a string', () => {
        expect(message).toEqual('Student deleted');
      });
    });
  });
});
