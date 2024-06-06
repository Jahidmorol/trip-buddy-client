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
        <h1 className="text-xl font-semibold transition-all">User All Trip</h1>
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
                  <TableHead className="text-center">Status</TableHead>
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

                    <TableCell className="flex items-center gap-4">
                      <Link href={`/admin/edit-user-trip/${trip?.id}`}>
                        <p
                          className={`bg-green-600 inline-flex justify-center items-center py-2 px-6 text-sm font-medium text-white  hover:bg-green-700 focus:outline-none transition-all`}
                        >
                          Edit
                        </p>
                      </Link>
                      <p
                        onClick={() => handleDeleteTrip(trip?.id)}
                        className="text-center py-2 text-sm cursor-pointer hover:bg-red-700 bg-red-600 hover:text-white  text-white transition-all px-2"
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
