import { faker } from '@faker-js/faker';

import { CreateGradeDto } from '@/grades/dtos/create-grade.dto';

const grades = (): CreateGradeDto[] => {
  const grade: CreateGradeDto[] = [];
  for (let i = 0; i < 50; i++) {
    grade.push({
      percentage: faker.number.float({ min: 0, max: 100 }),
    });
  }

  return grade;
};

export default grades;
