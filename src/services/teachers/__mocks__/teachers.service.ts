import { teacherStub } from '../../../../test/stubs/teacher.stub';

export const TeachersService = jest.fn().mockReturnValue({
  createTeacher: jest.fn().mockResolvedValue(teacherStub()),
  teachers: jest.fn().mockResolvedValue([teacherStub()]),
  findTeacher: jest.fn().mockResolvedValue(teacherStub()),
  updateTeacher: jest.fn().mockResolvedValue(teacherStub()),
  deleteTeacher: jest.fn().mockResolvedValue('Teacher deleted'),
});
