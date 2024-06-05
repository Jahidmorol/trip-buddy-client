"use client";

import SingleCard from "@/components/Card/SingleCard";
import LoadingComponent from "@/components/Loading/Loading";
import { getAllMyTrips } from "@/services/userDashboardDataFetching";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MyALLTripPage = () => {
  const [allMyTrips, setMyTrips] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await getAllMyTrips();
        setMyTrips(data?.data?.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center py-8">
        <h1 className="text-3xl font-semibold">My All Trip</h1>
        <Link
          className="text-primaryColor underline text-lg hover:text-blue-600 transition-all"
          href={"/"}
        >
          Back To Home
        </Link>
      </div>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          {allMyTrips.length === 0 ? (
            <h1 className="text-4xl font-bold text-center">
              You have not post yet
            </h1>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14 mb-24">
              {allMyTrips?.map((card: any) => (
                <SingleCard card={card} key={card?.id} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyALLTripPage;
