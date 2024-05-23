import Image from "next/image";
import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { GoCheckCircle } from "react-icons/go";

import aboutImage from "/public/about2.png";
import { Button } from "../ui/button";

const AboutSection = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 bg-aboutSection opacity-50 bg-cover bg-center"></div>
        <div className="relative z-10 container py-28">
          <p className="flex items-center gap-2 text-gray-300">
            Home <FaAnglesRight />
            About Us
          </p>
          <h1 className="text-4xl font-bold md:leading-[70px]">
            A Better Way of Traveling!
          </h1>
        </div>
      </div>
      <div className="container flex flex-col md:flex-row justify-center items-center gap-12 py-20">
        <div className="md:w-[500px]">
          <Image
            className="object-center object-cover w-full h-full"
            src={aboutImage}
            alt="image"
          />
        </div>
        <div className="md:w-[60%]">
          <h2 className="text-2xl text-primaryColor">About Us</h2>
          <h1 className="text-3xl font-semibold leading-9 tracking-[1.5px] py-2">
            We are Professional Planners <br /> For your Vacations
          </h1>
          <div className="flex gap-4 items-start pt-6">
            <div className="border border-[#e8604c] w-[180px] mt-2"></div>
            <div>
              <p className="leading-6 tracking-[1px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do
                eiusmod tem por incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <h2 className="font-semibold text-xl py-2">
                Speak to our Destination Experts at Direct Call +1 546 378 654
              </h2>
            </div>
          </div>
          <p className="flex items-center gap-2 text-base pt-6">
            <span className="mb-1">
              <GoCheckCircle color="#e8604c" size={20} />
            </span>
            All places and activates are carefully picked by us.
          </p>
          <p className="flex items-center gap-2 text-base py-1">
            <span className="mb-1">
              <GoCheckCircle color="#e8604c" size={20} />
            </span>
            We are an award winning agency
          </p>
          <p className="flex items-center gap-2 text-base">
            <span className="mb-1">
              <GoCheckCircle color="#e8604c" size={20} />
            </span>
            Trusted by more than 80,000 customers
          </p>
          <Button
            className="border w-64 font-semibold tracking-wide py-6 text-lg mt-8"
            variant={"outline"}
          >
            Find more trip
          </Button>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
