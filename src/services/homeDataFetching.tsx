"use server";

import { cookies } from "next/headers";

const accessToken = cookies().get("accessToken")?.value || "";

export const getAllTrips = async (queryParams: any) => {
  const params = new URLSearchParams(queryParams);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/trips/?${params}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${accessToken}`,
      },
      credentials: "include",
    }
  );

  const data = await res.json();

  return data;
};

export const getSingleTrips = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/trips/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${accessToken}`,
      },
      credentials: "include",
    }
  );

  const data = await res.json();

  return data;
};

export const getMyDetails = async (token: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/profile`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      credentials: "include",
    }
  );

  const data = await res.json();

  return data;
};

export const createTripRequest = async (id: string) => {
  if (!accessToken) {
    throw new Error("No authentication token found");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/trip/request/${id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${accessToken}`,
      },
      credentials: "include",
    }
  );

  const data = await res.json();

  return data;
};

export const updateUserDetails = async (data: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/profile`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${accessToken}`,
      },
      body: JSON.stringify(data),
      credentials: "include",
    }
  );

  const user = await res.json();

  return user;
};

export const updateTripDetails = async (id: string, data: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/trips/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${accessToken}`,
      },
      body: JSON.stringify(data),
      credentials: "include",
    }
  );

  const user = await res.json();

  return user;
};
