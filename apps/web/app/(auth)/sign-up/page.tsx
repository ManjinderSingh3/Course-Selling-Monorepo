import {
  Authorization,
  SignupForm,
  SignupFormFooter,
} from "@course-selling-monorepo/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up to CourseHub",
  description: "",
};

export default function Signup() {
  return (
    <Authorization
      OAuthSignIn={<></>}
      signInOrUpComp={<SignupForm />}
      title="Create an Account"
      description="Please enter your email below to create account"
      cardFooter={<SignupFormFooter />}
    />
  );
}
