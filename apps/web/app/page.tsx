import { Navbar } from "@course-selling-monorepo/ui";
import { Button } from "@course-selling-monorepo/utils";
import { getUser } from "@course-selling-monorepo/auth";
import { ProfileBanner } from "@/components/user-profile/profile-banner";
import { AppHeader, ModeToggle } from "@course-selling-monorepo/ui";

async function helper() {
  const user = await getUser();
  console.log("User details: ", user);
}

export default function Home() {
  helper();
  return (
    <div>
      <AppHeader>
        <ProfileBanner />
        <ModeToggle/>
      </AppHeader>
    </div>
  );
}
