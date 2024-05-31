import SingleCard from "@/components/Card/SingleCard";
import HomeHeroSection from "@/components/BannerSection/HomeHeroSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/trips`, {
    next: {
      revalidate: 30,
    },
  });
  const result = await res.json();

  const allTrips = result?.data?.data;

  return (
    <div>
      <HomeHeroSection />
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center pt-16">
          <h1 className="text-3xl font-semibold">Trending Group Trips</h1>
          <input
            type="text"
            autoComplete="off"
            placeholder="Search your trip..."
            className="block w-[280px] border focus:placeholder:text-red-500 border-gray-400 bg-gray-100 px-3 py-2 shadow-sm placeholder:font-semibold placeholder:text-black/60 focus:border-[#e44d36] focus:outline-none focus:!text-primaryColor focus:font-semibold focus:ring-1 focus:ring-[#e44d36] sm:text-sm"
            style={{ color: "black" }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 mx-auto">
          {allTrips?.map((card: any) => (
            <SingleCard card={card} key={card?.id} />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Link href={"/all-trip"}>
            <Button
              className="border w-60 font-semibold tracking-wide text-lg my-16"
              variant={"outline"}
            >
              More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
