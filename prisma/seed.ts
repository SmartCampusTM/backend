/* eslint-disable no-console */
import { PrismaClient } from '@prisma/client';

import { CreateUserDto } from '@modules/users/dtos/create-user.dto';

import { classes } from './data/classes';
import { classrooms } from './data/classroom';
import { grades } from './data/grades';
import { users } from './data/users';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.student.deleteMany();
  await prisma.teacher.deleteMany();
  await prisma.class.deleteMany();
  await prisma.classroom.deleteMany();
  await prisma.grade.deleteMany();

  const usersToCreate: CreateUserDto[] = users();

  await prisma.user.createMany({
    data: usersToCreate,
  });
  console.log('Users created');

  const students: CreateUserDto[] = usersToCreate
    .filter((user) => user.permission === 'student')
    .map((user) => {
      const { permission, ...rest } = user;
      return rest as CreateUserDto;
    });
  await prisma.student.createMany({
    data: students,
  });
  console.log('Students created');

  const teachers: CreateUserDto[] = usersToCreate
    .filter((user) => user.permission === 'teacher')
    .map((user) => {
      const { permission, ...rest } = user;
      return rest as CreateUserDto;
    });
  await prisma.teacher.createMany({
    data: teachers,
  });
  console.log('Teachers created');

  await prisma.class.createMany({
    data: classes(),
  });
  console.log('Classes created');

  await prisma.classroom.createMany({
    data: classrooms(),
  });
  console.log('Classrooms created');

  await prisma.grade.createMany({
    data: grades(),
  });
  console.log('Grades created');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
