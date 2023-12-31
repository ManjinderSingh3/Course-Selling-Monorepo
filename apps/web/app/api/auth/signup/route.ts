import { signUpSchema } from "@/lib/types";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Admin, isDbConnected } from "db";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";
// TODO: ADMIN_JWT_SECRET, MAX_AGE, COOKIE_NAME in .ENV file
const ADMIN_JWT_SECRET = "admin";
const MAX_AGE = 60 * 60 * 1000;
const COOKIE_NAME = "coursehubJWT";

// Sign-up Route : /api/auth/signup
export async function POST(request: NextRequest) {
  await isDbConnected();
  const body: unknown = await request.json();
  const parsedInput = signUpSchema.safeParse(body);

  // If there is an error while parsing the body sent by user
  let zodErrors = {};
  if (!parsedInput.success) {
    parsedInput.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
    return NextResponse.json({ errors: zodErrors });
  }

  const { email, password } = parsedInput.data;
  const admin = await Admin.findOne({ email });
  if (admin) {
    return NextResponse.json({ message: "Admin already exist." });
  } else {
    const newAdmin = new Admin({ email, password });
    await newAdmin.save();
    const token = jwt.sign({ id: newAdmin._id }, ADMIN_JWT_SECRET, {
      expiresIn: MAX_AGE,
    });

    const serialized = serialize(COOKIE_NAME, token, {
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
