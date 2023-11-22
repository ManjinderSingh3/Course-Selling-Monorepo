import {
  Authorization,
  SigninForm,
  SigninFormFooter,
} from "@course-selling-monorepo/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in to CourseHub",
  description: "",
};

export default function Signin() {
  return (
    <Authorization
      OAuthSignIn={<></>}
      signInOrUpComp={<SigninForm />}
      title="Sign In"
      description="Choose your preferred method to Sign in"
      cardFooter={<SigninFormFooter />}
    />
  );
}
