import { signUpSchema } from "@/lib/types";
import { NextResponse } from "next/server";
import { Admin, isDbConnected } from "db";
import jwt from "jsonwebtoken";
const ADMIN_JWT_SECRET = "admin";

// Sign-up Route : /api/signup
export async function POST(request: Request) {
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
    return NextResponse.json({ success: true, message: "Admin already exist" });
  } else {
    const newAdmin = new Admin({ email, password });
    await newAdmin.save();
    const token = jwt.sign({ id: newAdmin._id }, ADMIN_JWT_SECRET, {
      expiresIn: "1h",
    });
    return NextResponse.json({ message: "Admin created successfully" });
  }
}
