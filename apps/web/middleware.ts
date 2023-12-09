import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import AdminMiddleware from "@/lib/middleware/admin";

export default async function middleware(req: NextRequest) {
  return AdminMiddleware(req);
}
