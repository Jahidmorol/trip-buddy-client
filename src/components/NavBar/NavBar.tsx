"use client";

import React, { useContext, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { getFromLocalStorage } from "@/utils/local-storage";
import { usePathname, useRouter } from "next/navigation";
import { jwtHelpers } from "@/helpers/jwtHelpers";
import { UserContext } from "@/UserProvider/UserProvider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const deleteCookie = (name: string) => {
  document.cookie = `${name}=; Max-Age=-99999999;`;
};

const NavBar = () => {
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const userContext = useContext(UserContext);
  const pathname = usePathname();

  const { data, setRefetch, isLoading } = userContext || {
    data: null,
    setRefetch: () => {},
    isLoading: false,
  };

  const router = useRouter();

  const [user, setUser] = useState<any>({});

  useEffect(() => {
    const savedToken = getFromLocalStorage("accessToken");
    setToken(savedToken);

    if (savedToken) {
      try {
        const userData = jwtHelpers.decodedJWT(savedToken);
        setUser(userData);
      } catch (error: any) {
        // router.push("/login");
      }
    } else {
      // router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    deleteCookie("accessToken");
    localStorage.removeItem("accessToken");
    setToken(null);
    setUser({});
    if (userContext && userContext.setData) {
      userContext.setData({});
    }
    router.refresh();
  };

  return (
    <div className="container flex justify-between items-center py-6">
      <Link href="/">
        <h1 className="text-3xl font-extrabold text-primaryColor cursor-pointer">
          Trip<span className="text-white">Buddy</span>
        </h1>
      </Link>
      <div className="md:flex items-center justify-between w-[58%] hidden">
        <ul className="flex gap-1 items-center text-lg font-semibold tracking-[0.9px]">
          <Link
            className={`${
              pathname === "/"
                ? "text-primaryColor text-[20px] hover:text-[21px] hover:text-white"
                : ""
            } hover:text-primaryColor transition-all hover:text-[20px] w-[70px] text-center`}
            href={"/"}
          >
            <li>Home</li>
          </Link>
          <Link
            className={`${
              pathname === "/about"
                ? "text-primaryColor text-[20px] hover:text-[21px] hover:text-white"
                : ""
            } hover:text-primaryColor transition-all hover:text-[20px] w-[70px] text-center`}
            href={"/about"}
          >
            <li>About</li>
          </Link>
          <Link
            className={`${
              pathname === "/all-trip"
                ? "text-primaryColor text-[20px] hover:text-[21px] hover:text-white"
                : ""
            } hover:text-primaryColor transition-all hover:text-[20px] w-[75px] text-center`}
            href={"/all-trip"}
          >
            <li>All Trip</li>
          </Link>
          {token && (
            <Link
              className="hover:text-primaryColor transition-all hover:text-[20px] w-[70px] text-center"
              href={`${user?.role === "ADMIN" ? "/admin" : "/user"}`}
            >
              <li>Profile</li>
            </Link>
          )}
        </ul>
        {token ? (
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
            <Button
              onClick={handleLogout}
              className="border"
              variant={"outline"}
            >
              Log Out
            </Button>
          </div>
        ) : (
          <Link href={"/login"}>
            <Button className="border" variant={"outline"}>
              Sign In / Register
            </Button>
          </Link>
        )}
      </div>
      {/* Mobile device */}
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
              className="font-bold primary-color cursor-pointer text-white"
            />

            <div className="bg-gray-300 h-1 w-full"></div>
            <Link href="/">
              <h1 className="text-2xl font-extrabold text-primaryColor cursor-pointer">
                Trip<span className="text-white">Buddy</span>
              </h1>
            </Link>
          </div>

          <ul
            onClick={() => setIsSidebarMenuOpen(false)}
            className="flex flex-col gap-5 pl-8 text-lg font-semibold tracking-[0.9px]"
          >
            <Link
              className={`${
                pathname === "/"
                  ? "text-primaryColor text-[20px] hover:text-[21px] hover:text-white"
                  : ""
              } hover:text-primaryColor transition-all hover:text-[20px] w-[70px]`}
              href={"/"}
            >
              <li>Home</li>
            </Link>
            <Link
              className={`${
                pathname === "/about"
                  ? "text-primaryColor text-[20px] hover:text-[21px] hover:text-white"
                  : ""
              } hover:text-primaryColor transition-all hover:text-[20px] w-[70px]`}
              href={"/about"}
            >
              <li>About</li>
            </Link>
            <Link
              className={`${
                pathname === "/all-trip"
                  ? "text-primaryColor text-[20px] hover:text-[21px] hover:text-white"
                  : ""
              } hover:text-primaryColor transition-all hover:text-[20px] w-[75px]`}
              href={"/all-trip"}
            >
              <li>All Trip</li>
            </Link>
            {token && (
              <Link
                className="hover:text-primaryColor transition-all hover:text-[20px] w-[70px]"
                href={`${user?.role === "ADMIN" ? "/admin" : "/user"}`}
              >
                <li>Profile</li>
              </Link>
            )}
          </ul>

          {token ? (
            <div>
              <Button
                onClick={handleLogout}
                className="border w-full font-semibold mt-6"
                variant={"outline"}
              >
                Log Out
              </Button>
            </div>
          ) : (
            <Link href={"/login"}>
              <Button
                className="border w-full font-semibold mt-6"
                variant={"outline"}
              >
                Sign In / Register
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
