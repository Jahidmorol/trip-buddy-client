import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-heroSection bg-center bg-cover opacity-50"></div>
      <div className="relative z-10 container flex items-center justify-center py-12 h-[80vh]">
        <div>
          <h1 className="text-5xl md:text-[80px] font-extrabold text-center md:mx-36 md:leading-[80px] tracking-wider">
            Your Adventure Travel Expert In Paris
          </h1>

          <p className="text-center py-4 font-semibold tracking-wide text-xl">
            An adventure is only an inconvenience rightly considered
          </p>
          <div className="flex justify-center items-center pt-4">
            <Button
              className="border w-60 font-semibold tracking-wide py-5 text-lg"
              variant={"outline"}
            >
              Share Your Trip Plan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
