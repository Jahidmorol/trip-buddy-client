"use client";

import { getDashboardData } from "@/services/adminManagement";
import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";

const AdminDashboard = () => {
  const [allData, setData] = useState<any>({});

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getDashboardData();
        setData(data?.data);
      } catch (error) {}
    };
    getData();
  }, []);
  console.log(allData);
  return (
    <div className="w-full">
      <h1 className="text-3xl pb-10 font-semibold text-center pt-4 md:pt-8">
        Management All
      </h1>
      <div className="grid  md:grid-cols-3 gap-4">
        <div className="!bg-gradient-to-l from-orange-500 to-zinc-800 flex items-center gap-2 border p-4 max-w-[400px] w-full md:w-[320px] justify-between group hover:border-[#9e483a] transition-colors duration-300">
          <div>
            <h1 className="text-5xl group-hover:text-gray-300 font-semibold transition-colors duration-300">
              {allData?.totalUser}
              <span className="group-hover:text-primaryColor transition-colors duration-300">
                +
              </span>
            </h1>
            <h1 className="text-gray-400 group-hover:text-primaryColor transition-colors duration-300">
              Total Users
            </h1>
          </div>
          <FaUsers className="text-[90px] group-hover:text-primaryColor transition-colors duration-300" />
        </div>
        <div className="!bg-gradient-to-l from-orange-500 to-zinc-800 flex items-center gap-2 border p-4 max-w-[400px] w-full md:w-[320px] justify-between group hover:border-[#9e483a] transition-colors duration-300">
          <div>
            <h1 className="text-5xl group-hover:text-gray-300 font-semibold transition-colors duration-300">
              {allData?.totalActiveUser}
              <span className="group-hover:text-primaryColor transition-colors duration-300">
                +
              </span>
            </h1>
            <h1 className="text-gray-400 group-hover:text-primaryColor transition-colors duration-300">
              Total Active User
            </h1>
          </div>
          <FaUsers className="text-[90px] group-hover:text-primaryColor transition-colors duration-300" />
        </div>
        <div className="!bg-gradient-to-l from-orange-500 to-zinc-800 flex items-center gap-2 border p-4 max-w-[400px] w-full md:w-[320px] justify-between group hover:border-[#9e483a] transition-colors duration-300">
          <div>
            <h1 className="text-5xl group-hover:text-gray-300 font-semibold transition-colors duration-300">
              {allData?.totalDeActiveUser}
              <span className="group-hover:text-primaryColor transition-colors duration-300">
                +
              </span>
            </h1>
            <h1 className="text-gray-400 group-hover:text-primaryColor transition-colors duration-300">
              Total Users
            </h1>
          </div>
          <FaUsers className="text-[90px] group-hover:text-primaryColor transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
