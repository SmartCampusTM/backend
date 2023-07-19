import { PrismaClient } from '@prisma/client';
import { users } from './data/users';
import { CreateUserDto } from '@/modules/users/dtos/create-user.dto';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.student.deleteMany();
  await prisma.teacher.deleteMany();

  const usersToCreate: CreateUserDto[] = users();

  await prisma.user.createMany({
    data: usersToCreate,
  });
  console.log('Users created');

  const students: CreateUserDto[] = usersToCreate.filter((user) => user.permission === 'student').map((user) => { const { permission, ...rest } = user; return rest as CreateUserDto });
  await prisma.student.createMany({
    data: students
  })
  console.log('Students created');

  const teachers: CreateUserDto[] = usersToCreate.filter((user) => user.permission === 'teacher').map((user) => { const { permission, ...rest } = user; return rest as CreateUserDto });
  await prisma.teacher.createMany({
    data: teachers
  })
  console.log('Teachers created');
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
