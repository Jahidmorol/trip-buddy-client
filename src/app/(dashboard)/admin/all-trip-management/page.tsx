"use client";

import { deleteTrip } from "@/services/adminManagement";
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
import { getAllTrips } from "@/services/homeDataFetching";
import { usePathname } from "next/navigation";
import Pagination from "@/components/Pagination/Pagination";

const AllTripManagement = () => {
  const [allTrips, setAllTrips] = useState<any>([]);
  const [update, setUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const pathname = usePathname();
  const itemsPerPage = 9;

  const queryParams = {
    limit: itemsPerPage,
    page: currentPage,
  };

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const data = await getAllTrips(queryParams);

        setAllTrips(data?.data?.data);
        setTotalPages(Math.ceil(data?.data?.meta?.total / itemsPerPage));
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getData();
    setUpdate(false);
  }, [update, totalPages, currentPage]);

  const handleDeleteTrip = async (tripId: string) => {
    const updateData = await deleteTrip(tripId);

    if (updateData?.success) {
      toast.success("Trip Delete update successful!");
      setUpdate(true);
    }
  };

  return (
    <div className="w-full py-10">
      <div className="flex justify-between items-center pb-8">
        <div className="flex items-center gap-4">
          <Link
            className={`${
              pathname === "/admin/all-trip-management"
                ? "bg-red-600 w-[100px] text-center py-1 hover:bg-red-700 transition-all"
                : ""
            }`}
            href={"/admin/all-trip-management"}
          >
            <h1 className="text-xl font-semibold w-[100px] text-center">
              All Trip
            </h1>
          </Link>
          <Link href={"/admin/all-trip-request-management"}>
            <h1 className="text-xl font-semibold hover:text-primaryColor transition-all">
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
          <div className="border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Trip Name</TableHead>
                  <TableHead>Trip Destination</TableHead>
                  <TableHead>Trip Budget</TableHead>
                  <TableHead>Trip Start Date</TableHead>
                  <TableHead>Trip End Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allTrips?.map((trip: any) => (
                  <TableRow key={trip?.id}>
                    <TableCell className="font-medium w-[170px]">
                      {trip?.title}
                    </TableCell>
                    <TableCell>{trip?.destination}</TableCell>
                    <TableCell>$ {trip?.budget}</TableCell>

                    <TableCell>{trip?.startDate}</TableCell>
                    <TableCell>{trip?.endDate}</TableCell>

                    <TableCell>
                      <p
                        onClick={() => handleDeleteTrip(trip?.id)}
                        className="text-center py-2 text-sm cursor-pointer hover:bg-red-700 bg-red-600 hover:text-white border text-white transition-all"
                      >
                        Delete Trip
                      </p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
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

export default AllTripManagement;
