import { authOptions } from "@course-selling-monorepo/auth";
import NextAuth from "next-auth";
const handler = NextAuth(authOptions) as any;
export { handler as GET, handler as POST };
