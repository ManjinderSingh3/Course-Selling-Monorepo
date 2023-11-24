import {
  Navbar,
  SignupForm,
  SignupFormFooter,
  SigninForm,
  SigninFormFooter,
} from "@course-selling-monorepo/ui";
import { Button } from "@course-selling-monorepo/utils";
import { getUser } from "@course-selling-monorepo/auth";

async function helper() {
  console.log("Test");
  const user = await getUser();
  console.log("User details: ", user);
}

export default function Home() {
  helper();
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <Button>Test</Button>
      </div>
    </div>
  );
}
