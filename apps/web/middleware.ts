import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import AdminMiddleware from "@/lib/middleware/admin";

const isLoggedIn: boolean = false;

export default async function middleware(request: NextRequest) {
  return NextResponse.next();
  //return AdminMiddleware(request);
}
