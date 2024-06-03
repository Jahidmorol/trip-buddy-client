import HomeHeroSection from "@/components/BannerSection/HomeHeroSection";

import ExtraSection from "@/components/ExtraSection/ExtraSection";
import HomePageCard from "@/components/HomePageCard/HomePageCard";

export default async function Home() {
  return (
    <div>
      <HomeHeroSection />
      <div className="container">
        <HomePageCard />
        <ExtraSection />
      </div>
    </div>
  );
}
