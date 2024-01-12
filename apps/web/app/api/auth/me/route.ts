import { Admin } from "db/mongoDB";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import AdminMiddleware from "@/lib/middleware/admin";
import { verify } from "jsonwebtoken";
import { JwtPayload } from "@/lib/types";

// GET route (/api/auth/me) : to find the current user
export async function GET(request: NextRequest) {
  /* 
  Case:1
  If Signup using normal email-password, fetch details from DB
  */
  const token = request.cookies.get(process.env.COOKIE_NAME as string)?.value;
  if (!token) {
    return NextResponse.json({ message: "cookie token not found" });
  } else {
    // TODO : Admin MIDDLEWARE should do this verification
    let user = verify(
      token,
      process.env.ADMIN_JWT_SECRET as string
    ) as JwtPayload;
    const admin = await Admin.findOne({ _id: user.id });
    if (!admin) {
      // TODO : Show server error message to client
      return NextResponse.json({
        message: "Admin doesn't exist. Please try again !",
      });
    }
    return NextResponse.json({ email: admin.email });
  }

  /* This userId should be added in middleware
  const userId = request.headers.get("userId");
  const admin = await Admin.findOne({ _id: userId });
  */

  // Case:2 Next-Auth Authentication. Call getUserDetails method inside to get Current user session
}
