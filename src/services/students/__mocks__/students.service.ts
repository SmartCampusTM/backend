import { studentStub } from '../../../../test/stubs/student.stub';

export const StudentsService = jest.fn().mockReturnValue({
  createStudent: jest.fn().mockResolvedValue(studentStub()),
  students: jest.fn().mockResolvedValue([studentStub()]),
  findStudent: jest.fn().mockResolvedValue(studentStub()),
  updateStudent: jest.fn().mockResolvedValue(studentStub()),
  deleteStudent: jest.fn().mockResolvedValue('Student deleted'),
});
