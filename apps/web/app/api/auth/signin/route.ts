import { Admin, isDbConnected } from "db";
import { signInSchema } from "@/lib/types";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";
// TODO: ADMIN_JWT_SECRET, MAX_AGE, COOKIE_NAME in .ENV file
const ADMIN_JWT_SECRET = "admin";
const MAX_AGE = 60 * 60 * 1000;
const COOKIE_NAME = "coursehubJWT";

// Sign-in Route : /api/auth/signin
export async function POST(request: Request) {
  await isDbConnected();
  const body: unknown = await request.json();
  const parsedInput = signInSchema.safeParse(body);

  let zodErrors = {};
  if (!parsedInput.success) {
    parsedInput.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
    return NextResponse.json({ errors: zodErrors });
  }

  const { email, password } = parsedInput.data;
  const admin = await Admin.findOne({ email, password });
  if (admin) {
    const token = jwt.sign({ id: admin._id }, ADMIN_JWT_SECRET, {
      expiresIn: MAX_AGE,
    });

    const serialized = serialize(COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: MAX_AGE,
      path: "/",
    });

    const response = { message: "Logged In successfully" };
    return new Response(JSON.stringify(response), {
      headers: { "Set-Cookie": serialized },
    });
  } else {
    return NextResponse.json({
      message: "User authentication failed. Please try again !",
    });
  }
}
