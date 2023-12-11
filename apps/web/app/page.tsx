import { getUserDetails } from "@course-selling-monorepo/auth";
import { ProfileBanner } from "@/components/user-profile/profile-banner";
import { AppHeader } from "@course-selling-monorepo/ui";
import { Footer } from "@course-selling-monorepo/ui";
import { HomePage } from "@/components/home-page/home-page";

async function helper() {
  const user = await getUserDetails();
  console.log("User details: ", user);
}

export default function Home() {
  helper();
  return (
    <div>
      <AppHeader>
        <ProfileBanner />
      </AppHeader>
      <HomePage />
      <Footer />
    </div>
  );
}
