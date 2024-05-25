import DashboardNavBar from "@/components/NavBar/DashboardNavBar";
import Sidebar from "@/components/Sidebar/Sidebar";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container">
      <DashboardNavBar />
      <div className="flex flex-col md:flex-row gap-6">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
