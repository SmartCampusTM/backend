import { faker } from '@faker-js/faker';
import { CreateClassDto } from '@/modules/classes/dtos/create-class.dto';

export const classes = (): CreateClassDto[] => {
  let users: CreateClassDto[] = [];
  for (let i = 0; i < 50; i++) {
    users.push({
      name: faker.word.verb(),
      teacherId: faker.database.mongodbObjectId(),
      description: faker.lorem.sentences(1)
    });
  }

  return users;
};
