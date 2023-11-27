import {
  Navbar,
  SignupForm,
  SignupFormFooter,
  SigninForm,
  SigninFormFooter,
} from "@course-selling-monorepo/ui";
import { Button } from "@course-selling-monorepo/utils";
import { getUser } from "@course-selling-monorepo/auth";
import { ProfileBanner } from "@/components/user-profile/profile-banner";

async function helper() {
  console.log("Test");
  const user = await getUser();
  console.log("User details: ", user);
}

export default function Home() {
  helper();
  return (
    <div className="container flex justify-between">
      <div>
        {" "}
        <Navbar />
      </div>

      <div>
        <ProfileBanner/>
      </div>
    </div>
  );
}
