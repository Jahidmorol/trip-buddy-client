"use client";

import { getDashboardData } from "@/services/adminManagement";
import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { FiUserCheck } from "react-icons/fi";
import { LuUserX } from "react-icons/lu";
import { BiTrip } from "react-icons/bi";
import { FaCodePullRequest } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineAppRegistration } from "react-icons/md";

const AdminDashboard = () => {
  const [allData, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const data = await getDashboardData();
        setData(data?.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div className="w-full">
      <h1 className="text-3xl pb-10 font-semibold text-center pt-4 md:pt-8">
        Dashboard Home
      </h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="flex items-center gap-2 border p-4 max-w-[400px] w-full md:w-[320px] justify-between group hover:border-[#9e483a] transition-colors duration-300">
          <div>
            <h1 className="text-5xl group-hover:text-gray-300 font-semibold transition-colors duration-300">
              {allData?.totalUser}
              <span className="group-hover:text-primaryColor transition-colors duration-300">
                +
              </span>
            </h1>
            <h1 className="text-gray-400 pt-2 group-hover:text-primaryColor transition-colors duration-300">
              Total Users
            </h1>
          </div>
          <FaUsers className="text-[90px] group-hover:text-primaryColor transition-colors duration-300" />
        </div>
        <div className="flex items-center gap-2 border p-4 max-w-[400px] w-full md:w-[320px] justify-between group hover:border-[#9e483a] transition-colors duration-300">
          <div>
            <h1 className="text-5xl group-hover:text-gray-300 font-semibold transition-colors duration-300">
              {allData?.totalActiveUser}
              <span className="group-hover:text-primaryColor transition-colors duration-300">
                +
              </span>
            </h1>
            <h1 className="text-gray-400 pt-2 group-hover:text-primaryColor transition-colors duration-300">
              Total Active User
            </h1>
          </div>
          <FiUserCheck className="text-[90px] group-hover:text-primaryColor transition-colors duration-300" />
        </div>
        <div className="flex items-center gap-2 border p-4 max-w-[400px] w-full md:w-[320px] justify-between group hover:border-[#9e483a] transition-colors duration-300">
          <div>
            <h1 className="text-5xl group-hover:text-gray-300 font-semibold transition-colors duration-300">
              {allData?.totalDeActiveUser}
              <span className="group-hover:text-primaryColor transition-colors duration-300">
                +
              </span>
            </h1>
            <h1 className="text-gray-400 pt-2 group-hover:text-primaryColor transition-colors duration-300">
              Total Deactive User
            </h1>
          </div>
          <LuUserX className="text-[90px] group-hover:text-primaryColor transition-colors duration-300" />
        </div>
        <div className="flex items-center gap-2 border p-4 max-w-[400px] w-full md:w-[320px] justify-between group hover:border-[#9e483a] transition-colors duration-300">
          <div>
            <h1 className="text-5xl group-hover:text-gray-300 font-semibold transition-colors duration-300">
              {allData?.totalTrip}
              <span className="group-hover:text-primaryColor transition-colors duration-300">
                +
              </span>
            </h1>
            <h1 className="text-gray-400 pt-2 group-hover:text-primaryColor transition-colors duration-300">
              Total Trip
            </h1>
          </div>
          <BiTrip className="text-[90px] group-hover:text-primaryColor transition-colors duration-300" />
        </div>
        <div className="flex items-center gap-2 border p-4 max-w-[400px] w-full md:w-[320px] justify-between group hover:border-[#9e483a] transition-colors duration-300">
          <div>
            <h1 className="text-5xl group-hover:text-gray-300 font-semibold transition-colors duration-300">
              {allData?.totalTripRequest}
              <span className="group-hover:text-primaryColor transition-colors duration-300">
                +
              </span>
            </h1>
            <h1 className="text-gray-400 pt-2 group-hover:text-primaryColor transition-colors duration-300">
              Total Trip Request
            </h1>
          </div>
          <FaCodePullRequest className="text-[90px] group-hover:text-primaryColor transition-colors duration-300" />
        </div>
        <div className="flex items-center gap-2 border p-4 max-w-[400px] w-full md:w-[320px] justify-between group hover:border-[#9e483a] transition-colors duration-300">
          <div>
            <h1 className="text-5xl group-hover:text-gray-300 font-semibold transition-colors duration-300">
              {allData?.totalTripRequestApproved}
              <span className="group-hover:text-primaryColor transition-colors duration-300">
                +
              </span>
            </h1>
            <h1 className="text-gray-400 pt-2 group-hover:text-primaryColor transition-colors duration-300">
              Total Trip Request Approved
            </h1>
          </div>
          <MdOutlineAppRegistration className="text-[90px] group-hover:text-primaryColor transition-colors duration-300" />
        </div>
        <div className="flex items-center gap-2 border p-4 max-w-[400px] w-full md:w-[320px] justify-between group hover:border-[#9e483a] transition-colors duration-300">
          <div>
            <h1 className="text-5xl group-hover:text-gray-300 font-semibold transition-colors duration-300">
              {allData?.totalTripRequestRejected}
              <span className="group-hover:text-primaryColor transition-colors duration-300">
                +
              </span>
            </h1>
            <h1 className="text-gray-400 pt-2 group-hover:text-primaryColor transition-colors duration-300">
              Total Trip Request Rejected
            </h1>
          </div>
          <RxCross1 className="text-[90px] group-hover:text-primaryColor transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
