import { Admin } from "db";
import { NextResponse } from "next/server";
import AdminMiddleware from "@/lib/middleware/admin";

// GET route : to find the current user
export async function GET(request: Request){

  // Case:1 If Signup using normal email-password then, fetch details from DB 
  const userId = request.headers.get("userId");
  const admin = await Admin.findOne({ _id: userId });
  if (!admin) {
    // TODO : How should we show server error message to client
  }
  return NextResponse.json(admin);


  // Case:2 Next-Auth Authentication. Call getUserDetails method inside to get Current user session 
};
