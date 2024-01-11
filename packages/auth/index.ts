import { getServerSession, type NextAuthOptions } from "next-auth";
import "dotenv/config";

import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import FacebookProvider from "next-auth/providers/facebook";

export type OAuthProviders = (typeof providers)[number];
export const providers = ["google", "facebook", "discord"] as const;
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, //30 days
  },
};

export async function getUserDetails() {
  try {
    const session = await getServerSession(authOptions);
    return session?.user;
  } catch (err) {
    throw new Error((err as Error).message ?? "Please try again");
  }
}
