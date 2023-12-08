import { signUpSchema } from "@/lib/signUpSchema";
import { NextResponse } from "next/server";
import { Admin, isDbConnected } from "db";

// Sign-up Route : /api/signup
export async function POST(request: Request) {
  await isDbConnected();
  const body: unknown = await request.json();
  const parsedInput = signUpSchema.safeParse(body);

  let zodErrors = {};
  if (!parsedInput.success) {
    parsedInput.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
  }

  // Sending response back to client
  return NextResponse.json(
    Object.keys(zodErrors).length > 0
      ? { errors: zodErrors }
      : { success: true }
  );
}
