import { faker } from '@faker-js/faker';

import { CreateClassroomDto } from '@/classrooms/dtos/create-classroom.dto';

const classrooms = (): CreateClassroomDto[] => {
  const classroom: CreateClassroomDto[] = [];
  for (let i = 0; i < 50; i++) {
    const number: number = faker.number.int(500);
    classroom.push({
      name: `L${number}`,
      number,
    });
  }

  return classroom;
};

export default classrooms;
