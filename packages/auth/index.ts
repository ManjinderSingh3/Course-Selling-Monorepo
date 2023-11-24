import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

import { type NextAuthOptions } from "next-auth";

export type OAuthProviders = (typeof providers)[number];
export const providers = ["google", "facebook", "discord"] as const;
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  // session: {
  //   strategy: "jwt",
  //   maxAge: 30 * 24 * 60 * 60, //30 days
  // },
  // jwt: {
  //   encryption: true,
  // },
};
