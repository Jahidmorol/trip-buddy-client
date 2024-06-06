"use client";

import LoadingComponent from "@/components/Loading/Loading";
import Pagination from "@/components/Pagination/Pagination";
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
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const MyALLTripPage = () => {
  const [allMyTrips, setMyTrips] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const pathname = usePathname();
  const itemsPerPage = 9;

  const queryParams = {
    limit: itemsPerPage,
    page: currentPage,
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await getAllMyTrips();
        setTotalPages(Math.ceil(data?.data?.meta?.total / itemsPerPage));

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
      toast.success("Trip Delete successful!");
      setUpdate(true);
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center py-8">
        <div className="flex items-center gap-4">
          <Link
            className={`${
              pathname === "/user/my-all-trip"
                ? "bg-red-600 px-4 py-1 hover:bg-red-700 transition-all"
                : ""
            }`}
            href={"/user/my-all-trip"}
          >
            <h1 className="text-lg font-semibold">Trip Post</h1>
          </Link>
          <Link className="group" href={"/user/my-all-trip-request"}>
            <h1 className="border group-hover:border-red-400 py-[3px]  text-lg font-semibold w-[170px] text-center group-hover:text-primaryColor transition-all">
              All Trip Request
            </h1>
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
                            className={`bg-green-600 inline-flex justify-center items-center w-16 py-2 text-sm font-medium text-white  hover:bg-green-700 focus:outline-none`}
                          >
                            Edit
                          </button>
                        </Link>

                        <button
                          onClick={() => handleDeleteTrip(trip?.id)}
                          className={`inline-flex justify-center items-center w-16 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none `}
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
          <div className="flex justify-center items-center pb-16">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPage={totalPages}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MyALLTripPage;
