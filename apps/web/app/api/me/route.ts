import { Admin } from "db";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";
import AdminMiddleware from "@/lib/middleware/admin";
import { verify } from "jsonwebtoken";
const ADMIN_JWT_SECRET = "admin";
const COOKIE_NAME = "coursehubJWT";

interface JwtPayload {
  username?: string;
}

// GET route : to find the current user
export async function GET(request: NextRequest) {
  // Case:1 If Signup using normal email-password then, fetch details from DB
  const { cookies } = request;
  console.log(cookies);
  const token = request.cookies.get(COOKIE_NAME)?.value;
  console.log("cookie Token: ", token);

  if (!token) {
    return NextResponse.json({ message: "cookie token not found" });
  } else {
    // TODO : Admin MIDDLEWARE should do this verification
    
    //   let user = verify(token, ADMIN_JWT_SECRET) as JwtPayload;
    //   const admin = await Admin.findOne({ username: user.username });
    //   if (!admin) {
    //     NextResponse.json({ message: "Admin doesn't exist" });
    //     return;
    //   }
    //   NextResponse.json({
    //     username: admin.username,
    //   });
  }

  // This userId should be added in Middleware

  /*
  const userId = request.headers.get("userId");
  const admin = await Admin.findOne({ _id: userId });
  if (!admin) {
    // TODO : How should we show server error message to client
  }
  return NextResponse.json(admin);
  */

  // Case:2 Next-Auth Authentication. Call getUserDetails method inside to get Current user session
}
