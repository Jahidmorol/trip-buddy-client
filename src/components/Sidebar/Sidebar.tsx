"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="md:min-w-[220px]  md:border-r md:border-l md:border-b border-[#9e483a]">
      <ul className="flex flex-wrap md:flex-col gap-x-8 gap-y-4 font-semibold text-base">
        <Link
          className={`${
            pathname === "/user" ? "bg-[#e44d36]" : ""
          } text-white py-2 px-5 text-lg`}
          href={"/user"}
        >
          <li>Post Travel Trip</li>
        </Link>
        <Link
          className={`${
            pathname === "/" ? "bg-[#e44d36]" : ""
          } text-white py-2 px-5 text-lg`}
          href={"/about"}
        >
          <li>My Travel Request</li>
        </Link>
        <Link
          className={`${
            pathname === "/" ? "bg-[#e44d36]" : ""
          } text-white py-2 px-5 text-lg`}
          href={"/user"}
        >
          <li>Profile</li>
        </Link>
        <Link
          className={`${
            pathname === "/user/change-password" ? "bg-[#e44d36]" : ""
          } text-white py-2 px-5 text-lg`}
          href={"/user/change-password"}
        >
          <li>Password</li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
