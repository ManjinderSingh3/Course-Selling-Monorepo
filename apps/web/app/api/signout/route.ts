import { serialize } from "cookie";
import { NextRequest, NextResponse } from "next/server";
const COOKIE_NAME = "coursehubJWT";

//GET handler (api/signout): to return empty/clear JWT token
export async function GET(request: NextRequest) {
  const jwtToken = request.cookies.get(COOKIE_NAME)?.value;
  if (!jwtToken) {
    return NextResponse.json({ message: "You haven't signed in yet !" });
  } else {
    const serialized = serialize(COOKIE_NAME, "", {
      httpOnly: true,
      sameSite: "strict",
      maxAge: -1,
      path: "/",
    });
    const response = { message: "Successfully Logged out !!" };
    return new Response(JSON.stringify(response), {
      headers: { "Set-Cookie": serialized },
    });
  }
}
