"use client";

import { jwtHelpers } from "@/helpers/jwtHelpers";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const token = localStorage.getItem("accessToken");
  const pathname = usePathname();

  const user = jwtHelpers.decodedJWT(token!);

  return (
    <div className="md:min-w-[220px]  md:border-r md:border-l md:border-b border-[#9e483a]">
      {user?.role === "ADMIN" ? (
        <ul className="flex flex-wrap md:flex-col gap-x-8 gap-y-4 font-semibold text-base">
          <Link
            className={`${
              pathname === "/admin" ? "bg-[#e44d36]" : ""
            } text-white py-2 px-5 text-lg`}
            href={"/admin"}
          >
            <li>Dashboard</li>
          </Link>
          <Link
            className={`${
              pathname === "/admin/user-management" ? "bg-[#e44d36]" : ""
            } text-white py-2 px-5 text-lg`}
            href={"/admin/user-management"}
          >
            <li>User Management</li>
          </Link>
          <Link
            className={`${
              pathname === "/admin/trip-management" ? "bg-[#e44d36]" : ""
            } text-white py-2 px-5 text-lg`}
            href={"/admin/trip-management"}
          >
            <li>Trip Management</li>
          </Link>
          <Link
            className={`${
              pathname === "/admin/change-password" ? "bg-[#e44d36]" : ""
            } text-white py-2 px-5 text-lg`}
            href={"/admin/change-password"}
          >
            <li>Change Password</li>
          </Link>
        </ul>
      ) : (
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
              pathname === "/user/request" ? "bg-[#e44d36]" : ""
            } text-white py-2 px-5 text-lg`}
            href={"/user/request"}
          >
            <li>My Travel Request</li>
          </Link>
          <Link
            className={`${
              pathname === "/user/profile" ? "bg-[#e44d36]" : ""
            } text-white py-2 px-5 text-lg`}
            href={"/user/profile"}
          >
            <li>Profile</li>
          </Link>
          <Link
            className={`${
              pathname === "/user/change-password" ? "bg-[#e44d36]" : ""
            } text-white py-2 px-5 text-lg`}
            href={"/user/change-password"}
          >
            <li>Change Password</li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
