"use client";
import { updateUserRole, userManagement } from "@/services/adminManagement";
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

// Define the type for user data
interface User {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "USER";
  isActive: "ACTIVATE" | "DEACTIVATE";
}

const UserManagement: React.FC = () => {
  const [allUser, setAllUser] = useState<User[]>([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await userManagement();
        setAllUser(data?.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    getData();
  }, [update]);

  const handleRoleChange = async (
    userId: string,
    newRole: "ADMIN" | "USER"
  ) => {
    console.log("userId", userId, newRole);

    // Optionally, send the new role to the backend
    // updateUserRole(userId, newRole);
  };

  const handleStatusChange = async (
    userId: string,
    newStatus: "ACTIVATE" | "DEACTIVATE"
  ) => {
    const userData = {
      isActive: newStatus,
    };
    const updateData = await updateUserRole(userData, userId);

    if (updateData?.success) {
      toast.success("user role update successful!");
      setUpdate(true);
    }
  };

  return (
    <div className="w-full py-10">
      <h1 className="text-center text-4xl font-semibold pb-8">All Users</h1>
      <div className="border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allUser?.map((user) => (
              <TableRow key={user?.id}>
                <TableCell className="font-medium w-[170px]">
                  {user?.name}
                </TableCell>
                <TableCell>{user?.email}</TableCell>
                <TableCell>
                  <div className="relative inline-block text-left">
                    <div className="group">
                      <button
                        type="button"
                        className="inline-flex justify-center items-center w-24 px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                      >
                        {user?.role}
                      </button>

                      <div className="absolute z-10 w-24 origin-top-left bg-white divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                        <div>
                          <p
                            onClick={() => handleRoleChange(user?.id, "ADMIN")}
                            className="block px-4 py-2 text-sm cursor-pointer text-gray-700 hover:bg-[#e44d36] hover:text-white"
                          >
                            Admin
                          </p>
                          <p
                            onClick={() => handleRoleChange(user?.id, "USER")}
                            className="block px-4 py-2 text-sm cursor-pointer text-gray-700 hover:bg-[#e44d36] hover:text-white"
                          >
                            User
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="relative inline-block text-left">
                    <div className="group">
                      <button
                        type="button"
                        className="inline-flex justify-center items-center w-24 px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                      >
                        {user.isActive}
                      </button>

                      <div className="absolute z-10 w-24 origin-top-left bg-white divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                        <div>
                          <p
                            onClick={() =>
                              handleStatusChange(user?.id, "ACTIVATE")
                            }
                            className="block px-4 py-2 text-sm cursor-pointer text-gray-700 hover:bg-[#e44d36] hover:text-white"
                          >
                            ACTIVATE
                          </p>
                          <p
                            onClick={() =>
                              handleStatusChange(user?.id, "DEACTIVATE")
                            }
                            className="block px-4 py-2 text-sm cursor-pointer text-gray-700 hover:bg-[#e44d36] hover:text-white"
                          >
                            Deactivate
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserManagement;
