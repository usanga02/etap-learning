// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import { subjects } from './subjects';
import { topics } from './topics';

const prisma = new PrismaClient();

async function main() {
  // Seed Subjects
  for (let subject of subjects) {
    await prisma.subject.create({
      data: subject,
    });
  }

  // Seed Topics
  for (let topic of topics) {
    await prisma.topic.create({
      data: topic,
    });
  }
}

main()
  .catch((e) => {
    console.error('Error seeding data:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
