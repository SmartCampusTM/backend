import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      name: 'Alice',
      lastName: 'Doe',
      password: '12345678',
      profilePicture: 'https://assets.smartcampus.com/users/Abc12Xyz.jpg',
      permission: 'admin'
    },
  });

  const bob = await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      email: 'bob@prisma.io',
      name: 'Bob',
      lastName: 'Doe',
      password: '12345678',
      profilePicture: 'https://assets.smartcampus.com/users/Abc12Xyz.jpg',
      permission: 'admin'
    },
  });

  console.log({ alice, bob });
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
