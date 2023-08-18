import { Class } from '@prisma/client';

export const classStub = (): Class => {
  return {
    id: '1',
    teacherId: '1',
    name: 'Math',
    description: 'Math is a very important subject',
  };
};

export default classStub;
