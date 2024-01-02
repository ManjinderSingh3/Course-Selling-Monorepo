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
import { useRecoilValue } from "recoil";
import { userEmailState } from "store";
import { useRouter } from "next/navigation";

export function Signout() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const userEmail = useRecoilValue(userEmailState);
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
            {
              userEmail // if userEmail is found then we will clear jwtToken else Next-Auth Signout flow
                ? (await fetch(`api/auth/signout`, { method: "POST" }), // Clearing jwtToken
                  router.push("/"))
                : await signOut({ redirect: true, callbackUrl: "/" }); // Next-Auth Signout
            }
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
