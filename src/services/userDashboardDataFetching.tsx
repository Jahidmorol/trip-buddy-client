"use server";

import { cookies } from "next/headers";

const accessToken = cookies().get("accessToken")?.value || "";

export const getAllMyTrips = async (queryParams: any) => {
  const params = new URLSearchParams(queryParams);
  if (!accessToken) {
    throw new Error("No authentication token found");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/my-trips/?${params}`,
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

export const getAllMyTripsRequest = async () => {
  if (!accessToken) {
    throw new Error("No authentication token found");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/trip/request/user`,
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

export const postTrips = async (payload: any) => {
  if (!accessToken) {
    throw new Error("No authentication token found");
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/trips`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${accessToken}`,
    },
    body: JSON.stringify(payload),
    credentials: "include",
  });
  if (!res.ok) {
    throw new Error("data not fetch!");
  }

  const data = await res.json();

  return data;
};
