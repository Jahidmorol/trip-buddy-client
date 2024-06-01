"use client";

import { getSingleTrips } from "@/services/homeDataFetching";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import img1 from "../../../../../public/gallery/g1.jpg";
import img2 from "../../../../../public/gallery/g2.jpg";
import img3 from "../../../../../public/gallery/g6.jpg";
import img4 from "../../../../../public/gallery/g4.jpg";
import Link from "next/link";
import { FaFlag } from "react-icons/fa";

const SingleTripPage = () => {
  const { id } = useParams();

  const [singleTrip, setSingleTrip] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getSingleTrips(id as string);
        setSingleTrip(data?.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    getData();
  }, [id]);

  console.log("singleTrip", singleTrip);

  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0 bg-singlePageSection opacity-75 bg-cover bg-top "></div>
        <div className="relative z-10  py-36 container">
          <p className="flex items-center gap-2 text-gray-300">
            All Trip <FaAnglesRight />
            Trip Details
          </p>
          <h1 className="text-4xl font-bold md:leading-[70px]">
            Explore The Beauty Of World !
          </h1>
        </div>
      </div>

      <div className="flex py-9 gap-5 container">
        <div className="">
          <Image src={img1} alt="trip" className="rounded-3xl"></Image>
        </div>

        <div className="">
          <Image src={img2} alt="trip" className="rounded-3xl"></Image>
        </div>

        <div className="">
          <Image src={img3} alt="trip" className="rounded-3xl"></Image>
        </div>

        <div className="">
          <Image src={img4} alt="trip" className="rounded-3xl"></Image>
        </div>
      </div>

      <div className="container flex justify-between items-center shadow-[5px_5px_20px_-10px_rgba(255,255,255,0.3),_-5px_-5px_20px_-10px_rgba(255,255,255,0.3)] my-14 rounded-3xl !px-6 py-14">
        <p className="text-3xl font-semibold">Host Details</p>
        <Link
          href="#"
          className="bg-[#E8604C] text-white text-sm px-8 py-3 border transition-all ease-in-out hover:bg-transparent duration-300"
        >
          Book Now Trip
        </Link>
      </div>

      <div className="container">
        <h2 className="sm:text-3xl font-semibold text-lg mb-5">Tour Details</h2>
        <h2 className="font-semibold text-lg">Trip Name Or Destination</h2>
        <p className="pt-2 text-lg flex items-center gap-1">
          Trip Name is{" "}
          <mark className="px-2 bg-red-500 text-white">
            {singleTrip?.title}
          </mark>{" "}
          and Destination {""}
          <mark className="px-2 bg-red-500 text-white flex items-center gap-2 w-fit">
            {singleTrip?.destination} <FaFlag />
          </mark>
        </p>

        <div className="space-y-6 mt-8">
          <p className="font-semibold text-lg">About This Experience</p>
          <p>{singleTrip?.description}</p>

          <p className="font-semibold text-lg">Our Activates!</p>

          <div className="flex gap-20">
            <div>
              <p className="font-semibold text-lg pb-1">Activates: </p>
              <div className="pl-6">
                {singleTrip?.activities?.map((a: string, i: string) => (
                  <li key={i}>{a}</li>
                ))}
              </div>
            </div>
            <div>
              <p className="font-semibold text-lg">Trip Start Or End Date : </p>
              <ul className="text-lg py-4">
                <li>Start Date : {singleTrip?.startDate}</li>
                <li>End Date : {singleTrip?.endDate}</li>
              </ul>
            </div>
          </div>

          <p className="font-semibold text-lg mb-4">
            Tour Type : {singleTrip?.tripType}
          </p>

          <div className="">
            <p className="font-semibold text-lg mb-4">What we will do ?</p>
            <p className="text-sm">
              MAKE SURE TO BOOK WELL IN ADVANCE. <br />
              Once you’ve arrived at the Jump Zone, let the experience begin!
            </p>
          </div>
        </div>
      </div>
      <Link
        href="#"
        className="bg-[#E8604C] text-white text-sm px-8 py-3 border transition-all ease-in-out hover:bg-transparent duration-300 block mx-auto w-fit mb-9"
      >
        Book Now Trip
      </Link>

      <div className="my-16  bg-gray-700 p-14">
        <div className="container">
          <h2 className="sm:text-3xl font-semibold text-lg mb-6">
            Briefing: Understand the buggy and safety procedure
          </h2>

          <ul className="space-y-4 list-outside list-disc">
            <li>
              Disclaimer Form: Sign the disclaimers stating that you have read
              our terms and conditions and informed the crew of any medical
              conditions, and meet our set requirements for the tandem bungy
              jumping.
            </li>

            <li>
              Store your belongings: You will need to empty your pockets and
              store your valuables at the reception so as to have a smooth and
              clutter-free swing.
            </li>

            <li>
              Get harnessed: A minimum of 3 safety checks are done before you
              jump Due to the different process of the Jump from the Bungy, the
              Giant Swing in India allows you to enjoy double the freefall of
              the Bungy, with considerably more speed, and almost as much fear.
            </li>

            <li>
              After the Giant Swing, jumpers are lowered down to a drop zone in
              the river which has only 2 ft of water. Pin on the Got Guts badge
              on completion of your activity and claim your Dare-to-Jump
              certificate!
            </li>

            <li>
              Walk back up to the cafeteria and claim your Dare to Jump
              Certificate, while enjoying your video.
            </li>
          </ul>
        </div>
      </div>

      {/* trip book button  
    --------------------- */}
      <Link
        href="#"
        className="bg-[#E8604C] text-white text-sm px-8 py-3 border transition-all ease-in-out hover:bg-transparent duration-300 block mx-auto w-fit mb-9"
      >
        Book Now Trip
      </Link>
    </div>
  );
};

export default SingleTripPage;
