import Link from "next/link";
import React from "react";
import { CardFooter } from "@course-selling-monorepo/utils";

export default function SignupFormFooter() {
  return (
    <CardFooter>
      <div className="text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          aria-label="Sign in"
          href="/"
          className="text-primary underline-offset-4 transition-colors hover:underline"
        >
          Sign in
        </Link>
      </div>
    </CardFooter>
  );
}
