"use client";

import { Trip } from "@/app/(home)/all-trip/page";
import { getAllTrips } from "@/services/homeDataFetching";
import React, { useEffect, useState } from "react";
import SingleCard from "../Card/SingleCard";
import Link from "next/link";
import { Button } from "../ui/button";
import LoadingComponent from "../Loading/Loading";

const HomePageCard = () => {
  const [allTrips, setTrips] = useState<Trip[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [update, setUpdate] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const itemsPerPage = 9;

  const queryParams = {
    limit: itemsPerPage,
    searchTerm: searchQuery,
  };

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const data = await getAllTrips(queryParams);
        const fetchedTrips = data?.data?.data ?? [];
        setTrips(fetchedTrips);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getData();
    setUpdate(false);
  }, [update, searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(false), setSearchQuery(e.target.value);
    setUpdate(true);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-16">
        <h1 className="text-3xl font-semibold">Trending Group Trips</h1>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search..."
          className="block w-[180px] border border-gray-400 bg-gray-100 px-3 py-2 shadow-sm placeholder:font-semibold placeholder:text-black/60 focus:border-[#e44d36] focus:outline-none focus:!text-primaryColor focus:font-semibold focus:ring-1 focus:ring-[#e44d36] sm:text-sm"
          style={{ color: "black" }}
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 mx-auto">
          {allTrips?.map((card: any) => (
            <SingleCard card={card} key={card?.id} />
          ))}
        </div>
      )}
      <div className="flex justify-center items-center">
        <Link href={"/all-trip"}>
          <Button
            className="border w-60 font-semibold tracking-wide text-lg my-16"
            variant={"outline"}
          >
            More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePageCard;
