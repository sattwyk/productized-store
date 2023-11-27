import { PrismaClient } from '@prisma/client';

export const db = new PrismaClient({
  errorFormat: process.env.NODE_ENV === 'development' ? 'pretty' : 'colorless',
});
