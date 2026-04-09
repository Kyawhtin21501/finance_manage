import { PrismaClient } from "@prisma/client";

declare global {
  var __prismaClient__: PrismaClient | undefined;
}

const globalForPrisma = globalThis as typeof globalThis & {
  __prismaClient__?: PrismaClient;
};

export const prisma = globalForPrisma.__prismaClient__ ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.__prismaClient__ = prisma;
}
