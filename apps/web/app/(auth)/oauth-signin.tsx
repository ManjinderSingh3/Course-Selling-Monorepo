"use client";
import { OAuthProviders } from "@course-selling-monorepo/auth";
import { Icons } from "@course-selling-monorepo/ui";
import { Button } from "@course-selling-monorepo/utils";
import { useState } from "react";

type OAuthProviderProps = {
  name: string;
  provider: OAuthProviders;
  icon: keyof typeof Icons;
}[];

const oauthprovider: OAuthProviderProps = [
  { name: "Google", provider: "google", icon: "google" },
  { name: "Facebook", provider: "facebook", icon: "facebook" },
  { name: "Discord", provider: "discord", icon: "discord" },
];

export const OAuthSignIn = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleClick(provider: OAuthProviders) {
    try {
      console.log(provider);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4">
      {oauthprovider.map((provider) => {
        const Icon = Icons[provider.icon];
        return (
          <Button
            aria-label={`Sign in with ${provider.name}`}
            key={provider.provider}
            variant="outline"
            className="w-full bg-background sm:w-auto"
            disabled={isLoading}
            onClick={async () => {
              setIsLoading(true);
              await handleClick(provider.provider);
            }}
          >
            {provider.name}
          </Button>
        );
      })}
    </div>
  );
};
