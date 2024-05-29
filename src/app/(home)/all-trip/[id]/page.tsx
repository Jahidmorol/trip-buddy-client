"use client";

import { getSingleTrips } from "@/services/homeDataFetching";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SingleTripPage = () => {
  const { id } = useParams();

  const [singleTrip, setSingleTrip] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getSingleTrips(id as string);
        setSingleTrip(data?.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    getData();
  }, [id]);

  return <div>SingleTripPage {id}</div>;
};

export default SingleTripPage;
