import { faker } from '@faker-js/faker';
import { CreateClassroomDto } from '@/modules/classrooms/dtos/create-classroom.dto';

export const classrooms = (): CreateClassroomDto[] => {
  let classrooms: CreateClassroomDto[] = [];
  for (let i = 0; i < 50; i++) {
    const number: number = faker.number.int(500);
    classrooms.push({
        name: 'L' + number,
        number: number,
    });
  }

  return classrooms;
};
