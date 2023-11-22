"use client";
import Link from "next/link";
import { CardFooter } from "@course-selling-monorepo/utils";

export function SignupFormFooter() {
  return (
    <CardFooter>
      <div className="text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          aria-label="Sign in"
          href="/sign-in"
          className="text-black underline-offset-4 transition-colors hover:underline hover:font-bold"
        >
          Sign in
        </Link>
      </div>
    </CardFooter>
  );
}
