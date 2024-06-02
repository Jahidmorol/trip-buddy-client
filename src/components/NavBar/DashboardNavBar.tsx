"use client";
import React, { useContext, useState } from "react";
import { Button } from "../ui/button";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import { FaBars, FaUser, FaUserAlt } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { deleteCookie } from "./NavBar";
import { UserContext } from "@/UserProvider/UserProvider";
import { useRouter } from "next/navigation";

const DashboardNavBar = () => {
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);
  const userContext = useContext(UserContext);
  const router = useRouter();
  const { data, setRefetch, isLoading } = userContext || {
    data: null,
    setRefetch: () => {},
    isLoading: false,
  };
  const handleLogout = () => {
    deleteCookie("accessToken");
    localStorage.removeItem("accessToken");
    router.refresh();
  };

  return (
    <div className="container flex justify-between items-center pt-5 pb-4 !px-0 border-b border-[#9e483a]">
      <Link href="/">
        <h1 className="text-3xl font-extrabold text-primaryColor cursor-pointer">
          Trip<span className="text-white">Buddy</span>
        </h1>
      </Link>
      <div className="md:flex items-center justify-between w-[82%] hidden">
        <input
          type="text"
          autoComplete="off"
          placeholder="Search..."
          className="mt-1 block w-[300px] rounded-xl border border-gray-400 bg-gray-100 px-3 py-2 shadow-sm placeholder:font-semibold placeholder:text-black/60 focus:border-[#e44d36] focus:outline-none focus:!text-primaryColor focus:font-semibold focus:ring-1 focus:ring-[#e44d36] sm:text-sm"
          style={{ color: "black" }}
        />

        <div className="flex items-center gap-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <h1 className="border flex items-center justify-center transition-all hover:bg-[#EF4444] border-white rounded-full w-10 h-10 text-center uppercase text-lg">
                  {data?.name?.charAt(0)}
                </h1>
              </TooltipTrigger>
              <TooltipContent className="bg-black mt-2">
                <p className="pb-1">Name : {data?.name}</p>
                <p>Email : {data?.email}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Button onClick={handleLogout} className="border" variant={"outline"}>
            Log Out
          </Button>
        </div>
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
