import { PrismaClient } from "@prisma/client";
// Declaring global variable to get accessed throughout the project
declare global {
  var prisma: PrismaClient | undefined;
}
// Ensuring only single instance of PRISMA 
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;