import Link from "next/link";
import { Button } from "../ui/button";

const HomeHeroSection = () => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-heroSection bg-center bg-cover opacity-50"></div>
      <div className="relative z-10 container flex items-center justify-center py-12 h-[calc(100vh-88px)]">
        <div>
          <h1 className="text-5xl w-full duration-300 transition-all hover:tracking-[8px] md:text-[80px] font-extrabold text-center md:leading-[80px] tracking-wider">
            Your Adventure Travel
          </h1>
          <h1 className="text-5xl w-full duration-300 transition-all hover:tracking-[8px]  md:text-[80px] font-extrabold text-center md:leading-[80px] tracking-wider">
            Expert In Paris
          </h1>

          <p className="text-center hover:tracking-[3px] duration-300 transition-all py-4 font-semibold tracking-wide text-xl">
            An adventure is only an inconvenience rightly considered
          </p>
          <div className="flex justify-center items-center pt-4">
            <Link href={"/user"}>
              <Button
                className="w-60 border border-primaryColor h-auto hover:border-white !rounded-[8px] font-medium duration-300 transition-all hover:tracking-[1.5px] py-3 text-lg"
                variant={"outline"}
              >
                Share Your Trip Plan
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
