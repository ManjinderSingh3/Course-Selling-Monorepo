import { Admin } from "db";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import AdminMiddleware from "@/lib/middleware/admin";
import { verify } from "jsonwebtoken";
import { JwtPayload } from "@/lib/types";
const ADMIN_JWT_SECRET = "admin";
const COOKIE_NAME = "coursehubJWT";

// GET route (/api/me) : to find the current user
export async function GET(request: NextRequest) {
  /* 
  Case:1
  If Signup using normal email-password, fetch details from DB
  */
  const token = request.cookies.get(COOKIE_NAME)?.value;
  if (!token) {
    return NextResponse.json({ message: "cookie token not found" });
  } else {
    // TODO : Admin MIDDLEWARE should do this verification
    let user = verify(token, ADMIN_JWT_SECRET) as JwtPayload;
    const admin = await Admin.findOne({ _id: user.id });
    if (!admin) {
      // TODO : Show server error message to client
      return NextResponse.json({ message: "Admin doesn't exist" });
    }
    return NextResponse.json({ email: admin.email });
  }

  /* This userId should be added in middleware
  const userId = request.headers.get("userId");
  const admin = await Admin.findOne({ _id: userId });
  */

  // Case:2 Next-Auth Authentication. Call getUserDetails method inside to get Current user session
}
