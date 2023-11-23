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
      <div className="flex justify-center">
        <Button>Test</Button>
      </div>
    </div>
  );
}
