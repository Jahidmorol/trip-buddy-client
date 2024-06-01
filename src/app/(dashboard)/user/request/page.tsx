"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllMyTripsRequest } from "@/services/userDashboardDataFetching";
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
      <h1 className="text-center text-4xl font-semibold pb-8">All Users</h1>
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
    </div>
  );
};

export default MyTravelRequestPage;
