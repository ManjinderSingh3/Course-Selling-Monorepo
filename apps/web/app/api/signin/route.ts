import { Admin, isDbConnected } from "db";
import { signInSchema } from "@/lib/types";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
const ADMIN_JWT_SECRET = "admin";

// Sign-in Route : /api/signin
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
      expiresIn: "1h",
    });
    return NextResponse.json({ message: "Logged in Successfully !!", token });
  } else {
    return NextResponse.json({ message: "User authentication failed" });
  }
}
