"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { getFromLocalStorage } from "@/utils/local-storage";
import { useRouter } from "next/navigation";
import { jwtHelpers } from "@/helpers/jwtHelpers";

const NavBar = () => {
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);
  const token = getFromLocalStorage("accessToken");

  const router = useRouter();

  const [user, setUser] = useState<any>({});

  useEffect(() => {
    if (token) {
      try {
        const userData = jwtHelpers.decodedJWT(token);
        setUser(userData);
      } catch (error: any) {
        router.push("/login");
      }
    } else {
      router.push("/login");
    }
  }, [token]);

  console.log(user);

  return (
    <div className="container flex justify-between items-center py-6">
      <Link href="/">
        <h1 className="text-3xl font-extrabold text-primaryColor cursor-pointer">
          Trip<span className="text-white">Buddy</span>
        </h1>
      </Link>
      <div className="md:flex items-center justify-between w-[58%] hidden">
        <ul className="flex items-center gap-4 ">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/about"}>
            <li>About</li>
          </Link>
          <Link href={"/all-trip"}>
            <li>All Trip</li>
          </Link>
          <Link href={`${user?.role === "ADMIN" ? "/admin" : "/user"}`}>
            <li>Profile</li>
          </Link>
        </ul>
        <Link href={"/login"}>
          <Button className="border " variant={"outline"}>
            Sign In / Register
          </Button>
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

export default NavBar;
