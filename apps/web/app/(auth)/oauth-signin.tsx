"use client";
import { Icons } from "@course-selling-monorepo/ui";

type OAuthProviderProps = {
  name: string;
  provider: string;
  icon: keyof typeof Icons;
}[];

const oauthprovider: OAuthProviderProps = [
  { name: "Google", provider: "google", icon: "google" },
  { name: "Facebook", provider: "facebook", icon: "facebook" },
  { name: "Discord", provider: "discord", icon: "discord" },
];
