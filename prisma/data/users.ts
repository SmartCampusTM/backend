import { faker } from '@faker-js/faker';

import { CreateUserDto } from '@/users/dtos/create-user.dto';

const users = (): CreateUserDto[] => {
  const user: CreateUserDto[] = [];
  for (let i = 0; i < 50; i++) {
    user.push({
      email: faker.internet.email(),
      name: faker.person.firstName(),
      lastName: faker.person.lastName(),
      password: faker.internet.password(),
      permission: faker.helpers.arrayElement(['admin', 'teacher', 'student']),
      profilePicture: faker.image.url(),
    });
  }

  return user;
};

export default users;
