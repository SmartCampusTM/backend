import { classStub } from '../../../../test/stubs/class.stub';

export const ClassesService = jest.fn().mockReturnValue({
  createClass: jest.fn().mockResolvedValue(classStub()),
  classes: jest.fn().mockResolvedValue([classStub()]),
  findClass: jest.fn().mockResolvedValue(classStub()),
  updateClass: jest.fn().mockResolvedValue(classStub()),
  deleteClass: jest.fn().mockResolvedValue('Class deleted'),
});

export default ClassesService;
