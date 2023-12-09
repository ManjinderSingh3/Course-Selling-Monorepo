import { Admin } from "db";
import { NextResponse } from "next/server";
import AdminMiddleware from "@/lib/middleware/admin";

// GET route : to find the current user
export const GET = async (req: Request) => {
  const userId = req.headers.get("userId");
  const admin = await Admin.findOne({ _id: userId });
  if (!admin) {
    // TODO : How should we show server error message to client
  }
  return NextResponse.json(admin);
};
