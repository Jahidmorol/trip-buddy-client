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
import { getAllMyTripsRequest } from "@/services/userDashboardDataFetching";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MyTravelRequestPage = () => {
  const [allMyTripsRequest, setMyTripsRequest] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const itemsPerPage = 9;

  const queryParams = {
    limit: itemsPerPage,
    page: currentPage,
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await getAllMyTripsRequest(queryParams);
        setTotalPages(Math.ceil(data?.data?.meta?.total / itemsPerPage));

        setMyTripsRequest(data?.data?.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getData();
  }, [currentPage]);

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
            <>
              <div className="border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Your Name</TableHead>
                      <TableHead>Your Email</TableHead>
                      <TableHead>Trip Title</TableHead>
                      <TableHead>Trip Destination</TableHead>
                      <TableHead>Trip Budget</TableHead>
                      <TableHead className="w-[90px] text-center">
                        Trip Status
                      </TableHead>
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
                        <TableCell>{trip?.trip?.destination}</TableCell>
                        <TableCell>${trip?.trip?.budget}</TableCell>
                        <TableCell>
                          <p
                            className={`${
                              trip?.status?.toUpperCase() === "APPROVED"
                                ? "!bg-green-600 hover:!bg-green-700"
                                : trip?.status?.toUpperCase() === "PENDING"
                                ? "!bg-blue-600 hover:!bg-blue-700 "
                                : trip?.status?.toUpperCase() === "REJECTED"
                                ? "!bg-red-600 hover:!bg-red-700"
                                : ""
                            } w-24 px-4 py-1 cursor-pointer`}
                          >
                            {trip?.status}
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
        </>
      )}
    </div>
  );
};

export default MyTravelRequestPage;
