import { faker } from '@faker-js/faker';
import { schoolClasses } from './schoolClasses';
import { CreateClassDto } from '@/modules/classes/dtos/create-class.dto';

export const classes = (): CreateClassDto[] => {
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
