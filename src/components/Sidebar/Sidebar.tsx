import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="md:w-[220px] md:border-r md:border-l border-[#9e483a] md:min-h-[85vh]">
      <ul className="flex flex-wrap md:flex-col gap-x-8 gap-y-4 font-semibold text-base">
        <Link className="bg-[#e44d36] text-white px-4 py-2 text-lg" href={"/"}>
          <li>Post Travel Trip</li>
        </Link>
        <Link href={"/about"}>
          <li>My Travel Request</li>
        </Link>
        <Link href={"/user"}>
          <li>Profile</li>
        </Link>
        <Link href={"/user"}>
          <li>Password</li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
