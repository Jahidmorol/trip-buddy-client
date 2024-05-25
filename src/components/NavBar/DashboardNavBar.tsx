"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import { FaBars, FaUser, FaUserAlt } from "react-icons/fa";

const DashboardNavBar = () => {
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);

  return (
    <div className="container flex justify-between items-center pt-5 pb-4 !px-0 border-b border-[#9e483a]">
      <Link href="/">
        <h1 className="text-3xl font-extrabold text-primaryColor cursor-pointer">
          Trip<span className="text-white">Buddy</span>
        </h1>
      </Link>
      <div className="md:flex items-center justify-between w-2/4 hidden">
        <input placeholder="search..." />
        <Link href={"/login"}>
          <FaUser className="text-3xl border p-1 rounded-full " />
        </Link>
      </div>
      {/* mobil device  */}
      <FaBars
        onClick={() => setIsSidebarMenuOpen(true)}
        fontSize={28}
        className="cursor-pointer primary-color md:hidden"
      />
      <div
        className={`fixed h-full w-screen md:hidden bg-black/20 top-0 right-0 z-[999] -translate-x-full transition-transform ${
          isSidebarMenuOpen && "translate-x-0"
        }`}
      >
        <div className="text-white bg-[#121316] flex-col absolute left-0 top-0 h-screen p-6 gap-8 z-[999] min-w-[70%] flex">
          <div className="flex items-center gap-1">
            <GrClose
              onClick={() => setIsSidebarMenuOpen(false)}
              fontSize={50}
              className="font-bold primary-color cursor-pointer text-white "
            />

            <div className="bg-gray-300 h-1 w-full"></div>
          </div>

          <ul className="pl-11">
            <li onClick={() => setIsSidebarMenuOpen(false)} className="text-xl">
              <Link
                href={"/"}
                className={`flex items-center gap-3 font-semibold mb-8 text-sm`}
              >
                <FaUserAlt fontSize={20} className="primary-color" />
                profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavBar;
