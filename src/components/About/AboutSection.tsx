import Image from "next/image";
import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { GoCheckCircle } from "react-icons/go";

import aboutImage from "/public/about2.png";

import icon1 from "/public/aboutIcon/icon1.png";
import icon2 from "/public/aboutIcon/icon2.png";
import icon3 from "/public/aboutIcon/icon3.png";

import g1 from "/public/gallery/g1.jpg";
import g2 from "/public/gallery/g2.jpg";
import g3 from "/public/gallery/g3.jpg";
import g4 from "/public/gallery/g4.jpg";
import g5 from "/public/gallery/g5.jpg";
import g6 from "/public/gallery/g6.jpg";
import g7 from "/public/gallery/g7.jpg";
import g8 from "/public/gallery/g8.jpg";
import g9 from "/public/gallery/g9.jpg";

import { Button } from "../ui/button";
import Link from "next/link";

const AboutSection = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 bg-aboutSection opacity-50 bg-cover bg-center"></div>
        <div className="relative z-10 container py-28">
          <p className="flex items-center gap-2 text-gray-300">
            <Link
              className="flex items-center hover:underline gap-1"
              href={"/"}
            >
              Home <FaAnglesRight />
            </Link>
            About Us
          </p>
          <h1 className="text-4xl font-bold md:leading-[70px]">
            A Better Way of Traveling!
          </h1>
        </div>
      </div>
      <div className="container flex flex-col md:flex-row justify-center items-center gap-12 py-20 mt-16">
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
              <p className="leading-6 tracking-[1px] text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do
                eiusmod tem por incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <h2 className="font-semibold text-xl py-2 text-gray-400">
                Speak to our Destination Experts at Direct Call +1 546 378 654
              </h2>
            </div>
          </div>
          <p className="flex items-center gap-2 text-base pt-6 text-gray-300">
            <span className="mb-1">
              <GoCheckCircle color="#e8604c" size={20} />
            </span>
            All places and activates are carefully picked by us.
          </p>
          <p className="flex items-center gap-2 text-base py-1 text-gray-300">
            <span className="mb-1">
              <GoCheckCircle color="#e8604c" size={20} />
            </span>
            We are an award winning agency
          </p>
          <p className="flex items-center gap-2 text-base text-gray-300">
            <span className="mb-1">
              <GoCheckCircle color="#e8604c" size={20} />
            </span>
            Trusted by more than 80,000 customers
          </p>
          <Link href={"/all-trip"}>
            <Button
              className="w-64 border border-primaryColor mt-10 h-auto hover:border-white !rounded-[8px] font-medium duration-300 transition-all hover:tracking-[1.5px] py-[8px] text-lg"
              variant={"outline"}
            >
              Find more trip
            </Button>
          </Link>
        </div>
      </div>
      <div className="container py-10">
        <h2 className="text-2xl text-primaryColor text-center pb-2">
          Why Choose Us
        </h2>
        <h1 className="text-4xl text-center font-semibold tracking-wide">
          Why Travel with TripBuddy?
        </h1>
        <div className="flex flex-col md:flex-row py-16 gap-4">
          <div className="border p-4 border-[#e8604c] hover:border-gray-400 transition-all duration-300">
            <Image className="mx-auto" src={icon1} alt="image" />
            <h2 className="text-center text-2xl font-semibold py-2">
              Best Price Granted
            </h2>
            <p className="text-center pb-2 text-gray-400">
              Lorem ipsum dolor sit amet, consecte tur adipiscing elit. sed do
              eiusmod incididunt.
            </p>
          </div>

          <div className="border p-4 border-[#e8604c] hover:border-gray-400 transition-all duration-300">
            <Image className="mx-auto" src={icon2} alt="image" />
            <h2 className="text-center pb-2 text-2xl font-semibold py-2">
              Best Travel Guide
            </h2>
            <p className="text-center pb-2 text-gray-300">
              Lorem ipsum dolor sit amet, consecte tur adipiscing elit. sed do
              eiusmod incididunt.
            </p>
          </div>
          <div className="border p-4 border-[#e8604c] hover:border-gray-400 transition-all duration-300">
            <Image className="mx-auto" src={icon3} alt="image" />
            <h2 className="text-center text-2xl font-semibold py-2">
              Customer Care 24/7
            </h2>
            <p className="text-center text-gray-300">
              Lorem ipsum dolor sit amet, consecte tur adipiscing elit. sed do
              eiusmod incididunt.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="text-2xl text-primaryColor text-center pb-2">
          Our Gallery
        </h2>
        <h1 className="text-4xl text-center font-semibold tracking-wide pb-20">
          Our Image Gallery
        </h1>
        <div className="flex flex-wrap gap-6 pb-20">
          <div className="w-[400px] h-[350px] overflow-hidden">
            <Image
              className="w-full h-full object-cover object-center hover:scale-125 transition-transform duration-500 ease-in-out"
              src={g3}
              alt="image"
            />
          </div>
          <div className="w-[400px] h-[350px] overflow-hidden">
            <Image
              className="w-full h-full object-cover object-center hover:scale-125 transition-transform duration-500 ease-in-out"
              src={g1}
              alt="image"
            />
          </div>
          <div className="w-[400px] h-[350px] overflow-hidden">
            <Image
              className="w-full h-full object-cover object-center hover:scale-125 transition-transform duration-500 ease-in-out"
              src={g2}
              alt="image"
            />
          </div>
          <div className="w-[400px] h-[350px] overflow-hidden">
            <Image
              className="w-full h-full object-cover object-center hover:scale-125 transition-transform duration-500 ease-in-out"
              src={g4}
              alt="image"
            />
          </div>
          <div className="w-[400px] h-[350px] overflow-hidden">
            <Image
              className="w-full h-full object-cover object-center hover:scale-125 transition-transform duration-500 ease-in-out"
              src={g6}
              alt="image"
            />
          </div>
          <div className="w-[400px] h-[350px] overflow-hidden">
            <Image
              className="w-full h-full object-cover object-center hover:scale-125 transition-transform duration-500 ease-in-out"
              src={g5}
              alt="image"
            />
          </div>
          <div className="w-[400px] h-[350px] overflow-hidden">
            <Image
              className="w-full h-full object-cover object-center hover:scale-125 transition-transform duration-500 ease-in-out"
              src={g9}
              alt="image"
            />
          </div>
          <div className="w-[400px] h-[350px] overflow-hidden">
            <Image
              className="w-full h-full object-cover object-center hover:scale-125 transition-transform duration-500 ease-in-out"
              src={g7}
              alt="image"
            />
          </div>
          <div className="w-[400px] h-[350px] overflow-hidden">
            <Image
              className="w-full h-full object-cover object-center hover:scale-125 transition-transform duration-500 ease-in-out"
              src={g8}
              alt="image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
