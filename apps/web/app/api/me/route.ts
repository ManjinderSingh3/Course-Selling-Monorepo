import { Admin } from "db";
import { NextResponse } from "next/server";

// GET route to find the current user
export async function GET() {
  const admin = await Admin.findOne();
  if (!admin) {
  }
  return NextResponse.json(admin);
}
