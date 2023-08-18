import { faker } from '@faker-js/faker';
import { CreateGradesDto } from '@/modules/grades/dtos/create-grade.dto';

export const grades = (): CreateGradesDto[] => {
  let classrooms: CreateGradesDto[] = [];
  for (let i = 0; i < 50; i++) {
    classrooms.push({
        percentage: faker.number.float({ min: 0, max: 100 }),
    });
  }

  return classrooms;
};
