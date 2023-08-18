import { Classroom } from '@prisma/client';

export const classroomStub = (): Classroom => {
  return {
    id: '1',
    name: 'L214',
    number: 214,
  };
};

export default classroomStub;
