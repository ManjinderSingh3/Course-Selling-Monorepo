import {
  Navbar,
  SignupForm,
  SignupFormFooter,
  SigninForm,
  SigninFormFooter,
} from "@course-selling-monorepo/ui";
import { Button } from "@course-selling-monorepo/utils";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SignupForm />
      <SignupFormFooter />
      <SigninForm />
      <SigninFormFooter />
      {/* <Button className="w-full">Sign In 2</Button>      */}
    </div>
  );
}
