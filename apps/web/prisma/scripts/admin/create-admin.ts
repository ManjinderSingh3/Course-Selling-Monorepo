//  Sign-up/Create user query
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createUser() {
  await prisma.admin.create({
    data: {
      email: "",
      password: "",
    },
  });
}
createUser();