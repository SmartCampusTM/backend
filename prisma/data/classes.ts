import { faker } from '@faker-js/faker';
import { CreateClassDto } from '@/modules/classes/dtos/create-class.dto';
import { schoolClasses } from './schoolClasses';

export const classes = (): CreateClassDto[] => {
  let users: CreateClassDto[] = [];
  schoolClasses.forEach((aClass) => {
    users.push({
      name: aClass.name,
      teacherId: faker.database.mongodbObjectId(),
      description: aClass.description,
    });
  });

  return users;
};
