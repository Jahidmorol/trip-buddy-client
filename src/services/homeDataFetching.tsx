"use server";

import { cookies } from "next/headers";

const accessToken = cookies().get("accessToken")?.value || "";

export const getAllTrips = async () => {
  if (!accessToken) {
    throw new Error("No authentication token found");
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/trips`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${accessToken}`,
    },
    credentials: "include",
  });
  if (!res.ok) {
    throw new Error("data not fetch!");
  }

  const data = await res.json();

  return data;
};

export const getSingleTrips = async (id: string) => {
  if (!accessToken) {
    throw new Error("No authentication token found");
  }

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
  if (!res.ok) {
    throw new Error("data not fetch!");
  }

  const data = await res.json();

  return data;
};

export const getMyDetails = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/profile`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${accessToken}`,
      },
      credentials: "include",
    }
  );
  if (!res.ok) {
    throw new Error("data not fetch!");
  }

  const data = await res.json();

  return data;
};

export const createTripRequest = async (id: string) => {
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
  if (!res.ok) {
    throw new Error("data not fetch!");
  }

  const data = await res.json();

  return data;
};

export const updateUserDetails = async (data: any) => {
  if (!accessToken) {
    throw new Error("No authentication token found");
  }
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
