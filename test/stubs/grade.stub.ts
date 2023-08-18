import { Grade } from '@prisma/client';

export const gradeStub = (): Grade => {
  return {
    id: '1',
    percentage: 80.0,
  };
};

export default gradeStub;
