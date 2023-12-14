"use client";
import { signOut } from "next-auth/react";
import { Button, buttonVariants } from "@course-selling-monorepo/utils";
import React, { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@course-selling-monorepo/utils";
import { Icons } from "./auth-providers-icon/icons";

export function Signout() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">Sign out</CardTitle>
        <CardDescription>Are you sure you want to sign out?</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          size="sm"
          aria-label="Sign out"
          className="w-full"
          disabled={isLoading}
          onClick={async () => {
            setIsLoading(true);
            // Clearing jwtToken
            await fetch(`api/signout`, { method: "GET" });
            // Next-Auth Signout
            await signOut({ redirect: true, callbackUrl: "/" });
          }}
        >
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Sign out
        </Button>

        <Link href={"/"}>
          <div
            className={buttonVariants({
              size: "sm",
              className: "w-full mt-4",
              variant: "outline",
            })}
          >
            Go back
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}
