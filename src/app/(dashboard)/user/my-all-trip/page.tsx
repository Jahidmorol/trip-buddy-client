"use client";

import SingleCard from "@/components/Card/SingleCard";
import { getAllMyTrips } from "@/services/userDashboardDataFetching";
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

  if (isLoading) {
    <p>loading...</p>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14 mb-24">
        {allMyTrips?.map((card: any) => (
          <SingleCard card={card} key={card?.id} />
        ))}
      </div>
    </div>
  );
};

export default MyALLTripPage;
