import { Authorization, SigninFormFooter } from "@course-selling-monorepo/ui";
import { SigninForm } from "./signin-form";
import type { Metadata } from "next";
import { OAuthSignIn } from "../oauth-signin";

export const metadata: Metadata = {
  title: "Sign in to CourseHub",
  description: "",
};

export default function Signin() {
  return (
    <Authorization
      OAuthSignIn={<OAuthSignIn />}
      signInOrUpComp={<SigninForm />}
      title="Sign In"
      description="Choose your preferred method to Sign in"
      cardFooter={<SigninFormFooter />}
    />
  );
}
