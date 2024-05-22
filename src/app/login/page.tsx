"use client";

import RegisterComponent from "@/components/LoginAndRegister/RegisterFrom";
import LoginComponent from "@/components/LoginAndRegister/LoginFrom";

import React, { useState } from "react";

const LoginPage = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-loginSection bg-opacity-50">
      <div className="flex items-center justify-center py-16">
        <div className="border w-[500px] bg-white text-black p-6">
          <h1 className="text-center text-4xl font-extrabold text-[#e44d36] cursor-pointer">
            Trip<span className="text-black">Buddy</span>
          </h1>
          <div className="flex justify-between items-center text-white py-6">
            <button
              onClick={() => setToggle(false)}
              className={`${
                toggle
                  ? "text-[#e44d36] border border-[#e44d36]"
                  : "!bg-[#e44d36]"
              } hover:bg-[#e44d36] hover:text-white py-2 px-20 text-lg font-semibold transition-all duration-200`}
            >
              Sign In
            </button>
            <button
              onClick={() => setToggle(true)}
              className={`${
                toggle
                  ? "!bg-[#e44d36]"
                  : "text-[#e44d36] border border-[#e44d36]"
              } hover:bg-[#e44d36] hover:text-white py-2 px-20 text-lg font-semibold transition-all duration-200`}
            >
              Sign Up
            </button>
          </div>
          {toggle ? <RegisterComponent /> : <LoginComponent />}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
