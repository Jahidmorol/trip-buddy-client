import { Button } from "@/components/ui/button";
import React from "react";

const LoginPage = () => {
  return (
    <div className="bg-loginSection bg-opacity-50">
      <div className="flex items-center justify-center h-[80vh]">
        <div className="border w-[500px] bg-white text-black">
          <h1 className=" text-center text-3xl font-extrabold text-primaryColor cursor-pointer">
            Trip<span className="text-black">Buddy</span>
          </h1>
          <div className="flex justify-between items-center text-white">
            <button className="bg-[#e44d36]">Sign In</button>
            <button className="bg-[#e44d36]">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
