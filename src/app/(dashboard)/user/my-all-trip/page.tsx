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
import { deleteTrip } from "@/services/adminManagement";
import { getAllMyTrips } from "@/services/userDashboardDataFetching";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const MyALLTripPage = () => {
  const [allMyTrips, setMyTrips] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [update, setUpdate] = useState(false);

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
  }, [update]);

  const handleDeleteTrip = async (tripId: string) => {
    const updateData = await deleteTrip(tripId);

    if (updateData?.success) {
      toast.success("Trip Delete update successful!");
      setUpdate(true);
    }
  };

  console.log(allMyTrips);

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
            <div className="border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Trip Title</TableHead>
                    <TableHead>Trip Destination</TableHead>
                    <TableHead>Trip Start Date</TableHead>
                    <TableHead>Trip End Date</TableHead>
                    <TableHead className="text-center w-[160px]">
                      Action
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allMyTrips?.map((trip: any) => (
                    <TableRow key={trip?.id}>
                      <TableCell className="font-medium w-[170px]">
                        {trip?.title}
                      </TableCell>
                      <TableCell>{trip?.destination}</TableCell>
                      <TableCell>{trip?.startDate}</TableCell>
                      <TableCell>{trip?.endDate}</TableCell>
                      <TableCell className="flex items-center justify-center gap-4 ">
                        <Link href={`/user/edit-my-trip/${trip?.id}`}>
                          <button
                            type="button"
                            className={`bg-green-600 inline-flex justify-center items-center w-16 py-2 text-sm font-medium text-white  hover:bg-green-700 focus:outline-none focus:bg-gray-700`}
                          >
                            Edit
                          </button>
                        </Link>

                        <button
                          onClick={() => handleDeleteTrip(trip?.id)}
                          className={`inline-flex justify-center items-center w-16 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:bg-gray-700`}
                        >
                          Delete
                        </button>
                      </TableCell>
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

export default MyALLTripPage;
