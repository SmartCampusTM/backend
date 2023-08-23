import { Test } from '@nestjs/testing';

import { Grade } from '@prisma/client';

import GradesController from '@/grades/grades.controller';

import GradesService from '@/grades/grades.service';

import { UpdateGradeDto } from '@/grades/dtos/update-grade.dto';

import { gradeStub } from '../../../test/stubs/grade.stub';

jest.mock('@/grades/grades.service');

describe('GradesController', () => {
  let controller: GradesController;
  let service: GradesService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [GradesController],
      providers: [GradesService],
    }).compile();

    controller = moduleRef.get<GradesController>(GradesController);
    service = moduleRef.get<GradesService>(GradesService);
    jest.clearAllMocks();
  });

  describe('createGrade', () => {
    describe('when createGrade is called', () => {
      let grade: Grade | null;

      beforeEach(async () => {
        grade = await controller.create(gradeStub());
      });

      test('then it should call gradesService', () => {
        expect(service.createGrade).toBeCalledWith(gradeStub());
      });

      test('then it should return a grade', () => {
        expect(grade).toEqual(gradeStub());
      });
    });
  });

  describe('grades', () => {
    describe('when grades is called', () => {
      let grades: Grade[] | null;

      beforeEach(async () => {
        grades = await controller.findAll();
      });

      test('then it should call gradesService', () => {
        expect(service.grades).toHaveBeenCalled();
      });

      test('then it should return a array of grades', () => {
        expect(grades).toEqual([gradeStub()]);
      });
    });
  });

  describe('findGrade', () => {
    describe('when findGrade is called', () => {
      let grade: Grade | null;

      beforeEach(async () => {
        grade = await controller.findOne(gradeStub().id);
      });

      test('then it should call gradesService', () => {
        expect(service.findGrade).toBeCalledWith(gradeStub().id);
      });

      test('then it should return a grade', () => {
        expect(grade).toEqual(gradeStub());
      });
    });
  });

  describe('updateGrade', () => {
    describe('when updateGrade is called', () => {
      let updateGradeDto: UpdateGradeDto;
      let grade: Grade | null;

      beforeEach(async () => {
        updateGradeDto = {
          percentage: 2.9,
        };
        grade = await controller.update(gradeStub().id, updateGradeDto);
      });

      test('then it should call gradesService', () => {
        expect(service.updateGrade).toBeCalledWith(
          gradeStub().id,
          updateGradeDto,
        );
      });

      test('then it should return a grade', () => {
        expect(grade).toEqual(gradeStub());
      });
    });
  });

  describe('deleteGrade', () => {
    describe('when deleteGrade is called', () => {
      let message: string;

      beforeEach(async () => {
        message = await controller.delete(gradeStub().id);
      });

      test('then it should call gradesService', () => {
        expect(service.deleteGrade).toBeCalledWith(gradeStub().id);
      });

      test('then it should return a string', () => {
        expect(message).toEqual('Grade deleted');
      });
    });
  });
});
