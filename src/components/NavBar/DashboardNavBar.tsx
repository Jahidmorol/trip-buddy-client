"use client";
import React, { useContext } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
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
  const userContext = useContext(UserContext);
  const router = useRouter();
  const { data } = userContext || {
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
      <div className="md:hidden">
        <h1 className="border flex items-center justify-center transition-all hover:bg-[#EF4444] border-white rounded-full w-10 h-10 text-center uppercase text-lg">
          {data?.name?.charAt(0)}
        </h1>
      </div>
    </div>
  );
};

export default DashboardNavBar;
