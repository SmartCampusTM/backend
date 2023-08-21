import { CreateGradeDto } from '@modules/grades/dtos/create-grade.dto';

// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';

export const grades = (): CreateGradeDto[] => {
  const classrooms: CreateGradeDto[] = [];
  for (let i = 0; i < 50; i + 1) {
    classrooms.push({
      percentage: faker.number.float({ min: 0, max: 100 }),
    });
  }

  return classrooms;
};

export default grades;
