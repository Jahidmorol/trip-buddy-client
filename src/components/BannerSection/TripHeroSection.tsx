import { Button } from "../ui/button";

const TripHeroSection = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0 bg-tripSection bg-bottom bg-cover opacity-50"></div>
        <div className="relative z-10 container flex items-center justify-center py-16 md:py-32">
          <div>
            <h1 className="text-4xl md:text-[75px] font-extrabold text-center md:mx-36 md:leading-[80px] tracking-wider">
              Find Next Place To Visit.
            </h1>

            <p className="text-center py-4 font-semibold tracking-wide md:text-xl">
              Life is not meant to be lived in one place.
            </p>
            <div className="flex justify-center items-center pt-4">
              <Button
                className="border w-60 font-semibold tracking-wide py-5 text-lg"
                variant={"outline"}
              >
                Explore More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripHeroSection;
