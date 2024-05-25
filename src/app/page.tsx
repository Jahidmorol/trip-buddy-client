import SingleCard from "@/components/Card/SingleCard";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="container">
        <h1 className="text-3xl font-semibold pt-24">Trending Group Trips</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 mt-14 mb-24">
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <SingleCard />
        </div>
      </div>
    </div>
  );
}
