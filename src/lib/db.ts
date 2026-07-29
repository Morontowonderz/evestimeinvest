import { PrismaClient } from '@prisma/client';

// Initialize PrismaClient with runtime datasource URL for Prisma 7+.
// Neon (serverless Postgres) connection string should be provided in DATABASE_URL env.

declare global {
  // eslint-disable-next-line no-var
  var __prismaClient: PrismaClient | undefined;
}

const prisma = global.__prismaClient ?? new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

if (process.env.NODE_ENV !== 'production') global.__prismaClient = prisma;

export default prisma;
