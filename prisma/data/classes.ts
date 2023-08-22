import { faker } from '@faker-js/faker';

import { CreateClassDto } from '@/classes/dtos/create-class.dto';

import { schoolClasses } from './schoolClasses';

const classes = (): CreateClassDto[] => {
  const users: CreateClassDto[] = [];
  schoolClasses.forEach((aClass) => {
    users.push({
      name: aClass.name,
      teacherId: faker.database.mongodbObjectId(),
      description: aClass.description,
    });
  });

  return users;
};

export default classes;
