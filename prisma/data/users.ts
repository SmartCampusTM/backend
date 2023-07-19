import { faker } from '@faker-js/faker';
import { CreateUserDto } from '@/modules/users/dtos/create-user.dto';

export const users = (): CreateUserDto[] => {
  let users: CreateUserDto[] = [];
  for (let i = 0; i < 50; i++) {
    users.push({
      email: faker.internet.email(),
      name: faker.person.firstName(),
      lastName: faker.person.lastName(),
      password: faker.internet.password(),
      permission: faker.helpers.arrayElement(['admin', 'teacher', 'student']),
      profilePicture: faker.image.url(),
    });
  }

  return users;
};
