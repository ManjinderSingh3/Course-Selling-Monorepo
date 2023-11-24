import { getServerSession, type NextAuthOptions } from "next-auth";

import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export type OAuthProviders = (typeof providers)[number];
export const providers = ["google", "facebook", "discord"] as const;
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      // clientId: process.env.GOOGLE_CLIENT_ID as string,
      // clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      clientId:
        "425027369989-h6chmnp351m1vk739rpl5vg3bd2a0rfl.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  //secret: process.env.NEXTAUTH_SECRET as string,
  secret: "50whtXdNwbdmMPe9EEdt9SEI4ls9A0gS+9fwWjKjzd0=",
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, //30 days
  }
};

export async function getUser() {
  try {
    const session = await getServerSession(authOptions);
    return session?.user;
  } catch (err) {
    throw new Error((err as Error).message ?? "Please try again");
  }
}
