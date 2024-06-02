"use client";

import { getMyDetails } from "@/services/homeDataFetching";
import { getFromLocalStorage } from "@/utils/local-storage";
import { createContext, useEffect, useState, ReactNode, Dispatch } from "react";

export const UserContext = createContext<{
  data: any | null;
  setRefetch: Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
} | null>(null);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const accessToken = getFromLocalStorage("accessToken");

  const fetchUser = async () => {
    setIsLoading(true);
    try {
      const data = await getMyDetails();

      setData(data?.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setRefetch(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [refetch, accessToken]);

  const userInfo = {
    data,
    setRefetch,
    isLoading,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
