import Link from "next/link";
import { Button } from "../ui/button";

const TripHeroSection = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0 bg-tripSection bg-bottom bg-cover opacity-50"></div>
        <div className="relative z-10 container flex items-center justify-center py-16 md:py-32">
          <div className="relative z-10 container flex items-center justify-center py-12 h-[30vh]">
            <div>
              <h1 className="text-5xl w-full duration-300 transition-all hover:tracking-[8px] md:text-[80px] font-extrabold text-center md:leading-[80px] tracking-wider">
                Find Next Place To Visit.
              </h1>

              <p className="text-center hover:tracking-[3px] duration-300 transition-all py-4 font-semibold tracking-wide text-xl">
                Life is not meant to be lived in one place.
              </p>
              <div className="flex justify-center items-center pt-4">
                <Link href={"/user"}>
                  <Button
                    className="border w-60 font-semibold duration-300 transition-all hover:tracking-[1.5px] py-5 text-lg"
                    variant={"outline"}
                  >
                    Share Your Trip Plan
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripHeroSection;
