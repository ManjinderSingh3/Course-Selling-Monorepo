import { signUpSchema } from "@/lib/types";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import prisma from "@/prisma/prisma";
import { Admin, isDbConnected } from "db/mongoDB";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";
const MAX_AGE = 60 * 60 * 1000;

// Sign-up Route : /api/auth/signup
export async function POST(request: NextRequest) {
  // await isDbConnected();
  // Step 1: Parsing the Input Request
  const body: unknown = await request.json();
  const parsedInput = signUpSchema.safeParse(body);


  // Step 2: Checking if there is an error while parsing the body sent by user
  let zodErrors = {};
  if (!parsedInput.success) {
    parsedInput.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
    return NextResponse.json({ errors: zodErrors });
  }

  // Step 3: Pulling inputs sent in the request
  const { email, password } = parsedInput.data;
  const admin = await prisma.admin.findUnique({
    where: {
      email: email,
    },
  });
  //const admin = await Admin.findOne({ email });

  // Step 4: Checking if Admin already exist
  if (admin) {
    return NextResponse.json({ message: "Admin already exist." });
  } else {
    // Step 5: CREATE new admin
    const newAdmin = await prisma.admin.create({
      data: {
        email: email,
        password: password,
      },
    });
    // const newAdmin = new Admin({ email, password });
    // await newAdmin.save();

    // Step 6: Creating JWT token
    const token = jwt.sign(
      { id: newAdmin.id },
      process.env.ADMIN_JWT_SECRET as string,
      {
        expiresIn: MAX_AGE,
      }
    );

    const serialized = serialize(process.env.COOKIE_NAME as string, token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: MAX_AGE,
      path: "/",
    });

    const response = { message: "Admin created successfully !" };
    return new Response(JSON.stringify(response), {
      headers: { "Set-Cookie": serialized },
    });
  }
}
