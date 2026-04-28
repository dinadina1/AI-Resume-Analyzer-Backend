import { PrismaClient } from '../../generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create admin user
  const adminPassword = await bcrypt.hash('Admin@1234', 12);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@airesumeanalyzer.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@airesumeanalyzer.com',
      role: 'ADMIN',
      credentials: { create: { passwordHash: adminPassword } },
    },
  });

  // Create test user
  const userPassword = await bcrypt.hash('Test@1234', 12);
  const testUser = await prisma.user.upsert({
    where: { email: 'test@airesumeanalyzer.com' },
    update: {},
    create: {
      name: 'Test User',
      email: 'test@airesumeanalyzer.com',
      role: 'USER',
      credentials: { create: { passwordHash: userPassword } },
    },
  });

  console.log(`✅ Seeded admin: ${admin.email}`);
  console.log(`✅ Seeded user: ${testUser.email}`);
  console.log('🎉 Seeding complete!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
