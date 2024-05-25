"use client";
import TripHeroSection from "@/components/BannerSection/TripHeroSection";
import SingleCard from "@/components/Card/SingleCard";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const AllTripPage = () => {
  const [filter, setFilter] = useState("Filter");
  return (
    <div>
      <TripHeroSection />
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-semibold py-6">All Trips</h1>
        <div className="flex items-center gap-3">
          <input
            type="text"
            autoComplete="off"
            placeholder="Search..."
            className="block w-[180px] border border-gray-400 bg-gray-100 px-3 py-2 shadow-sm placeholder:font-semibold placeholder:text-black/60 focus:border-[#e44d36] focus:outline-none focus:!text-primaryColor focus:font-semibold focus:ring-1 focus:ring-[#e44d36] sm:text-sm"
            style={{ color: "black" }}
          />

          <div className="min-w-[100px]  text-gray-900 ">
            <div className="relative w-full group">
              <button className="py-2 capitalize text-white px-3 w-full md:text-sm text-site bg-transparent border border-dimmed  focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between rounded font-semibold">
                {filter}
              </button>
              <div className="absolute z-[99] top-[55px]  translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-[200px] w-max peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200  bg-gray-100   border border-dimmed text-xs md:text-sm">
                <div
                  onClick={() => setFilter("all")}
                  className="w-full hover:text-white
                 block cursor-pointer hover:bg-[#e44d36] hover:text-link px-4 py-2 rounded-md"
                >
                  All (9)
                </div>
                <div
                  onClick={() => setFilter("Full Stack")}
                  className="w-full hover:text-white
                 block cursor-pointer hover:bg-[#e44d36] hover:text-link px-4 py-2 rounded-md"
                >
                  Full Stack (6)
                </div>
                <div
                  onClick={() => setFilter("Front End")}
                  className="w-full hover:text-white
                 block cursor-pointer hover:bg-[#e44d36] hover:text-link px-4 py-2 rounded-md"
                >
                  Front End (1)
                </div>
                <div
                  onClick={() => setFilter("Freelance")}
                  className="w-full hover:text-white
                 block cursor-pointer hover:bg-[#e44d36] hover:text-link px-4 py-2 rounded-md"
                >
                  Freelance (1)
                </div>
                <div
                  onClick={() => setFilter("New Stack Project")}
                  className="w-full hover:text-white
                 block cursor-pointer hover:bg-[#e44d36] hover:text-link px-4 py-2 rounded-md"
                >
                  New Stack Project (1)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-y-4 mt-14 mb-24">
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </div>
      <div className="flex justify-center items-center">
        <Button
          className="border w-60 font-semibold tracking-wide text-lg mb-16"
          variant={"outline"}
        >
          More
        </Button>
      </div>
    </div>
  );
};

export default AllTripPage;
