import { gradeStub } from '../../../test/stubs/grade.stub';

export const GradesService = jest.fn().mockReturnValue({
  createGrade: jest.fn().mockResolvedValue(gradeStub()),
  grades: jest.fn().mockResolvedValue([gradeStub()]),
  findGrade: jest.fn().mockResolvedValue(gradeStub()),
  updateGrade: jest.fn().mockResolvedValue(gradeStub()),
  deleteGrade: jest.fn().mockResolvedValue('Grade deleted'),
});

export default GradesService;
