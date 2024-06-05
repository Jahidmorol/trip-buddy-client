"use client";

import LoadingComponent from "@/components/Loading/Loading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllMyTripsRequest } from "@/services/userDashboardDataFetching";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MyTravelRequestPage = () => {
  const [allMyTripsRequest, setMyTripsRequest] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await getAllMyTripsRequest();

        setMyTripsRequest(data?.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="w-full py-10">
      <div className="flex justify-between items-center pb-8">
        <h1 className="text-3xl font-semibold">My All Trip Request</h1>
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
          {allMyTripsRequest.length === 0 ? (
            <h1 className="text-4xl font-bold text-center">
              You have not request any trip
            </h1>
          ) : (
            <div className="border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User Name</TableHead>
                    <TableHead>User Email</TableHead>
                    <TableHead>Trip Title</TableHead>
                    <TableHead>Trip Budget</TableHead>
                    <TableHead>Trip Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allMyTripsRequest?.map((trip: any) => (
                    <TableRow key={trip?.id}>
                      <TableCell className="font-medium w-[170px]">
                        {trip?.user?.name}
                      </TableCell>
                      <TableCell>{trip?.user?.email}</TableCell>
                      <TableCell>{trip?.trip?.title}</TableCell>
                      <TableCell>{trip?.trip?.budget}</TableCell>
                      <TableCell>{trip?.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyTravelRequestPage;
