import { classroomStub } from '../../../../test/stubs/classroom.stub';

export const ClassroomsService = jest.fn().mockReturnValue({
  createClassroom: jest.fn().mockResolvedValue(classroomStub()),
  classrooms: jest.fn().mockResolvedValue([classroomStub()]),
  findClassroom: jest.fn().mockResolvedValue(classroomStub()),
  updateClassroom: jest.fn().mockResolvedValue(classroomStub()),
  deleteClassroom: jest.fn().mockResolvedValue('Classroom deleted'),
});
