import { getUser } from "@course-selling-monorepo/auth";
import { ProfileBanner } from "@/components/user-profile/profile-banner";
import { AppHeader } from "@course-selling-monorepo/ui";
import { Footer } from "@course-selling-monorepo/ui";
import { HomePage } from "@/components/home-page/home-page";
import { HeroSection } from "@/components/home-page/hero-section";
import { AchievementsSection } from "@/components/home-page/achievements-section";

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
      </AppHeader>

      {/* <HomePage /> */}
      <HeroSection />
      <AchievementsSection />
      <Footer />
    </div>
  );
}
