import { signUpSchema } from "@/lib/signUpSchema";
import { NextResponse } from "next/server";
import { Admin, isDbConnected } from "db";
import jwt from "jsonwebtoken";
const ADMIN_JWT_SECRET = "admin";

// Sign-up Route : /api/signup
export async function POST(request: Request) {
  console.log("Signup route got hit");
  await isDbConnected();
  const body: unknown = await request.json();
  const parsedInput = signUpSchema.safeParse(body);

  // If there is an error while parsing the body sent by user
  let zodErrors = {};
  if (!parsedInput.success) {
    console.log("Error");
    parsedInput.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
    return NextResponse.json({ errors: zodErrors });
  }

  const { email, password } = parsedInput.data;
  console.log(email);
  const admin = await Admin.findOne({ email });
  if (admin) {
    console.log("Admin exist");
    return NextResponse.json({ success: true, message: "Admin already exist" });
  } else {
    console.log("New Admin");
    const newAdmin = new Admin({ email, password });
    await newAdmin.save();
    const token = jwt.sign({ id: newAdmin._id }, ADMIN_JWT_SECRET, {
      expiresIn: "1h",
    });
    return NextResponse.json({ message: "Admin created successfully" });
  }
}
