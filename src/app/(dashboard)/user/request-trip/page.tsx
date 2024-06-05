"use client";

import {
  getAllTripRequest,
  updateTripRequestStatus,
} from "@/services/adminManagement";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";
import Link from "next/link";
import LoadingComponent from "@/components/Loading/Loading";
import { usePathname } from "next/navigation";

const TripManagement = () => {
  const [allDates, setAllDates] = useState<any>([]);
  const [update, setUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const data = await getAllTripRequest();
        setAllDates(data?.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getData();
    setUpdate(false);
  }, [update]);

  const handleChangeTripRequestStatus = async (
    tripId: string,
    newStatus: "APPROVED" | "REJECTED" | "PENDING"
  ) => {
    const tripData = {
      status: newStatus,
    };

    const updateData = await updateTripRequestStatus(tripData, tripId);

    if (updateData?.success) {
      toast.success("Trip Status update successful!");
      setUpdate(true);
    }
  };

  return (
    <div className="w-full py-10">
      <div className="flex justify-between items-center pb-8">
        <div className="flex items-center gap-4">
          <Link href={"/admin/all-trip-management"}>
            <h1 className="text-xl font-semibold w-[100px] text-center hover:text-primaryColor transition-all">
              All Trip
            </h1>
          </Link>

          <Link
            className={`${
              pathname === "/admin/all-trip-request-management"
                ? "bg-red-600 px-4 py-1 hover:bg-red-700 transition-all"
                : ""
            }`}
            href={"/admin/all-trip-request-management"}
          >
            <h1 className="text-xl font-semibold">All Trip Request</h1>
          </Link>
        </div>
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
        <div className="border h-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User Name</TableHead>
                <TableHead>User Email</TableHead>
                <TableHead>Trip Title</TableHead>
                <TableHead>Trip Budget</TableHead>
                <TableHead>Trip Start Date</TableHead>
                <TableHead>Trip End Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allDates?.map((trip: any) => (
                <TableRow key={trip?.id}>
                  <TableCell className="font-medium w-[170px]">
                    {trip?.user?.name}
                  </TableCell>
                  <TableCell>{trip?.user?.email}</TableCell>
                  <TableCell>{trip?.trip?.title}</TableCell>
                  <TableCell>{trip?.trip?.budget}</TableCell>
                  <TableCell>{trip?.trip?.startDate}</TableCell>
                  <TableCell>{trip?.trip?.endDate}</TableCell>

                  <TableCell>
                    <div className="relative inline-block text-left">
                      <div className="group">
                        <button
                          type="button"
                          className={`${
                            trip?.status?.toUpperCase() === "APPROVED"
                              ? "!bg-green-600"
                              : trip?.status?.toUpperCase() === "PENDING"
                              ? "!bg-blue-600"
                              : trip?.status?.toUpperCase() === "REJECTED"
                              ? "!bg-red-600"
                              : ""
                          } inline-flex justify-center items-center w-24 px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700`}
                        >
                          {trip?.status}
                        </button>

                        <div className="absolute z-10 w-24 origin-top-left bg-white divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                          <div>
                            <p
                              onClick={() =>
                                handleChangeTripRequestStatus(
                                  trip?.id,
                                  "APPROVED"
                                )
                              }
                              className="block px-4 py-2 text-sm cursor-pointer text-gray-700 hover:bg-[#e44d36] hover:text-white"
                            >
                              APPROVED
                            </p>
                            <p
                              onClick={() =>
                                handleChangeTripRequestStatus(
                                  trip?.id,
                                  "PENDING"
                                )
                              }
                              className="block px-4 py-2 text-sm cursor-pointer text-gray-700 hover:bg-[#e44d36] hover:text-white"
                            >
                              PENDING
                            </p>
                            <p
                              onClick={() =>
                                handleChangeTripRequestStatus(
                                  trip?.id,
                                  "REJECTED"
                                )
                              }
                              className="block px-4 py-2 text-sm cursor-pointer text-gray-700 hover:bg-[#e44d36] hover:text-white"
                            >
                              REJECTED
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default TripManagement;
