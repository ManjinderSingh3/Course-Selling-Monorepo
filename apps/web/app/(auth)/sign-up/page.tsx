import { Authorization, SignupFormFooter } from "@course-selling-monorepo/ui";
import { SignupForm } from "./signup-form";
import type { Metadata } from "next";
import { OAuthSignIn } from "../oauth-signin";

export const metadata: Metadata = {
  title: "Sign up to CourseHub",
  description: "",
};

export default function Signup() {
  return (
    <Authorization
      OAuthSignIn={<OAuthSignIn />}
      signInOrUpComp={<SignupForm />}
      title="Create an Account"
      description="Please enter your email below to create account"
      cardFooter={<SignupFormFooter />}
    />
  );
}
