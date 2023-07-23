import { faker } from '@faker-js/faker';
import { CreateClassDto } from '@/modules/classes/dtos/create-class.dto';
import { SchoolClass, schoolClasses } from './schoolClasses';

export const classes = (): CreateClassDto[] => {
  let users: CreateClassDto[] = [];
  for (let i = 0; i < 50; i++) {
    const aClass: SchoolClass = faker.helpers.arrayElement(schoolClasses);
    users.push({
      name: aClass.name,
      teacherId: faker.database.mongodbObjectId(),
      description: aClass.description,
    });
  }

  return users;
};
