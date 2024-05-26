"use server";

import { cookies } from "next/headers";

const accessToken = cookies().get("accessToken")?.value || "";

export const passwordChange = async (data: any) => {
  if (!accessToken) {
    throw new Error("No authentication token found");
  }
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/change-password`,
    {
      method: "POST",
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
