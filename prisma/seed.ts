/* eslint-disable no-console */
import { PrismaClient } from '@prisma/client';

import classes from './data/classes';
import classrooms from './data/classroom';
import grades from './data/grades';
import users from './data/users';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.class.deleteMany();
  await prisma.classroom.deleteMany();
  await prisma.grade.deleteMany();

  await prisma.user
    .createMany({
      data: users(),
    })
    .then(() => console.log('Users created'));

  await prisma.class
    .createMany({
      data: classes(),
    })
    .then(() => console.log('Classes created'));

  await prisma.classroom
    .createMany({
      data: classrooms(),
    })
    .then(() => console.log('Classrooms created'));

  await prisma.grade
    .createMany({
      data: grades(),
    })
    .then(() => console.log('Grades created'));
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
