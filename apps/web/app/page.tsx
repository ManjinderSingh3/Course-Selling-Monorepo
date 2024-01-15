import { getUserDetails } from "@/lib/auth/authOptions";
import { ProfileBanner } from "@/components/user-profile/profile-banner";
import { AppHeader } from "@course-selling-monorepo/ui";
import { Footer } from "@course-selling-monorepo/ui";
import { HomePage } from "@/components/home-page/home-page";
import { RecoilRoot } from "recoil";
import InitUser from "./init-user/init-user";

async function helper() {
  const user = await getUserDetails();
  console.log("User details: ", user);
}

export default function Home() {
  helper();
  return (
      <div>
        <InitUser />
        <AppHeader>
          <ProfileBanner />
        </AppHeader>
        <HomePage />
        <Footer />
      </div>
  );
}
