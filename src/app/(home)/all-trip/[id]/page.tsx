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

  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0 bg-aboutSection opacity-50 bg-cover bg-center"></div>
        <div className="relative z-10  py-28 container">
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

      {/* book trip now 
    --------------------- */}
      <div className="container flex justify-between items-center p-16 shadow-[5px_5px_20px_-10px_rgba(255,255,255,0.3),_-5px_-5px_20px_-10px_rgba(255,255,255,0.3)] my-14 rounded-3xl">
        <p className="text-3xl font-semibold">Host Details</p>
        <Link
          href="#"
          className="bg-[#E8604C] text-white text-sm px-8 py-3 border transition-all ease-in-out hover:bg-transparent duration-300"
        >
          Book Now Trip
        </Link>
      </div>

      <div className="container">
        <h2 className=" sm:text-3xl font-semibold text-lg mb-5">
          Tour Details
        </h2>
        <div className="space-y-7">
          <p className="font-semibold text-lg">About This Experience</p>
          <p>
            Double the free fall of the Bungy with almost as much fear! Giant
            Swing offers you the ultimate spine-chilling experience. Challenge
            your fears as you swing through the lush valleys of Rishikesh- solo
            or in tandem! An adaptation of the Canyon Swing that happens in New
            Zealand, the Giant Swing is set amidst the pahadi landscape of
            Uttarakhand! Operated from the same Bungy Cantilever, this is
            India’s most extreme Giant Swing!
          </p>

          <p className="font-semibold text-lg">Who Should Attend ?</p>

          <div className="">
            <p className="font-semibold text-lg">Requirements :</p>
            <div className="pl-6">
              <li>Min. Age :12 years</li>
              <li>Min. Weight : 35 Kgs</li>
              <li>Max. Weight : 130 Kgs</li>
            </div>
          </div>

          <div className="">
            <p className="font-semibold text-lg mb-4">Medical Conditions:</p>

            <p>
              Due to its extreme nature, this sport is not suitable for people
              with the following medical conditions.
            </p>

            <div className="pl-6 py-1">
              <li>Back or Neck injuries</li>
              <li>Recent Fracture</li>
              <li>Any Dislocation</li>
              <li>High Blood Pressure</li>
              <li>Asthma</li>
              <li>Neurological Disorders</li>
              <li>Epilepsy</li>
              <li>Heart Conditions</li>
              <li>Pregnancy</li>
            </div>

            <p>
              In case of any of these conditions, you will be prohibited from
              Jumping. In case of any other relevant conditions, especially over
              the age of 45, you are obliged to inform the Crew, and will
              further be allowed to jump only at their discretion.
            </p>
          </div>

          <div className="">
            <p>
              “These being extreme adventure sports,come prepared to rough it
              out.”
            </p>
            <p className="font-semibold text-lg">HIGHLIGHTS:</p>

            <div className="pl-6 py-1">
              <li>Jumpin Heights is owned and run by Ex-Army officers.</li>
              <li>
                Jump Masters trained extensively under experts from New Zealand.
              </li>
              <li>We follow Australia & New Zealand Safety standards.</li>
              <li>
                {" "}
                Operated over 1.5 lakh jumps- a record for adventure tourism in
                India.
              </li>
              <li>
                Jumpin Heights is the only adventure facility to be certified by
                the Ministry of Tourism, Govt.
              </li>
              <li>
                of India for Bungy and Giant Swing operations in the country!
                Details
              </li>
            </div>
          </div>

          <div className="">
            <p className="font-semibold text-lg mb-4">What we will do ?</p>
            <p className="text-sm">
              MAKE SURE TO BOOK WELL IN ADVANCE. <br />
              Once you’ve arrived at the Jump Zone, let the experience begin!
            </p>
          </div>
        </div>
      </div>

      <div className="my-16  bg-gray-700 p-14">
        <div className="container">
          <h2 className="sm:text-3xl font-semibold text-lg mb-6">
            Briefing: Understand the bungy and safety procedure
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
