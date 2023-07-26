import { Teacher } from '@prisma/client';

export const teacherStub = (): Teacher => {
  return {
    id: '1',
    email: 'john.doe@example.com',
    name: 'John',
    lastName: 'Doe',
    password: 'ExamplePassword',
    profilePicture: 'https://assets.smartcampus/com/users/john-doe.jpg',
  };
};
