"use client";

import TripHeroSection from "@/components/BannerSection/TripHeroSection";
import SingleCard from "@/components/Card/SingleCard";
import Pagination from "@/components/Pagination/Pagination";

import { getAllTrips } from "@/services/homeDataFetching";
import React, { useEffect, useState } from "react";

type Trip = {
  id: string;
  // Add other relevant fields here
};

const AllTripPage: React.FC = () => {
  const [filter, setFilter] = useState<string>("Filter");
  const [allTrips, setTrips] = useState<Trip[]>([]);
  const [update, setUpdate] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const itemsPerPage = 2;

  const queryParams = {
    limit: itemsPerPage,
    page: currentPage,
    searchTerm: searchQuery,
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAllTrips(queryParams);
        const fetchedTrips = data?.data?.data ?? [];
        setTrips(fetchedTrips);
        setTotalPages(data?.data?.meta?.total / itemsPerPage);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    getData();
    setUpdate(false);
  }, [update, searchQuery, currentPage]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on new search
    setUpdate(true);
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    setUpdate(true);
  };

  return (
    <div>
      <TripHeroSection />
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-semibold py-6">All Trips</h1>
        <div className="flex items-center gap-3">
          <input
            type="text"
            autoComplete="off"
            placeholder="Search..."
            className="block w-[180px] border border-gray-400 bg-gray-100 px-3 py-2 shadow-sm placeholder:font-semibold placeholder:text-black/60 focus:border-[#e44d36] focus:outline-none focus:!text-primaryColor focus:font-semibold focus:ring-1 focus:ring-[#e44d36] sm:text-sm"
            style={{ color: "black" }}
            value={searchQuery}
            onChange={handleSearchChange}
          />

          <div className="min-w-[100px] text-gray-900">
            <div className="relative w-full group">
              <button className="py-2 capitalize text-white px-3 w-full md:text-sm text-site bg-transparent border border-dimmed focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between rounded font-semibold">
                {filter}
              </button>
              <div className="absolute z-[99] top-[55px] translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-[200px] w-max peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200 bg-gray-100 border border-dimmed text-xs md:text-sm">
                <div
                  onClick={() => setFilter("all")}
                  className="w-full hover:text-white block cursor-pointer hover:bg-[#e44d36] hover:text-link px-4 py-2 rounded-md"
                >
                  All (9)
                </div>
                <div
                  onClick={() => setFilter("Full Stack")}
                  className="w-full hover:text-white block cursor-pointer hover:bg-[#e44d36] hover:text-link px-4 py-2 rounded-md"
                >
                  Full Stack (6)
                </div>
                <div
                  onClick={() => setFilter("Front End")}
                  className="w-full hover:text-white block cursor-pointer hover:bg-[#e44d36] hover:text-link px-4 py-2 rounded-md"
                >
                  Front End (1)
                </div>
                <div
                  onClick={() => setFilter("Freelance")}
                  className="w-full hover:text-white block cursor-pointer hover:bg-[#e44d36] hover:text-link px-4 py-2 rounded-md"
                >
                  Freelance (1)
                </div>
                <div
                  onClick={() => setFilter("New Stack Project")}
                  className="w-full hover:text-white block cursor-pointer hover:bg-[#e44d36] hover:text-link px-4 py-2 rounded-md"
                >
                  New Stack Project (1)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-y-4 mt-14 mb-12">
        {allTrips?.map((card) => (
          <SingleCard card={card} key={card.id} />
        ))}
      </div>
      <div className="flex justify-center items-center pb-16">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPages}
        />
      </div>
    </div>
  );
};

export default AllTripPage;
