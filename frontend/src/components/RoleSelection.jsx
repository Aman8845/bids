import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const { isSignedIn, user } = useUser();

  const roles = [
    {
      id: "bidder",
      label: "Bidder",
      description: "Participate in auctions and place bids",
    },
    {
      id: "auctioner",
      label: "Auctioner",
      description: "Create and manage auctions",
    },
    {
      id: "admin",
      label: "Admin",
      description: "Manage the platform and users",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center p-4 bg-white rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Select Your Role</h2>
      <div className="flex flex-row gap-4 w-full justify-center">
        {roles.map((role) => (
          <div
            key={role.id}
            className={`w-1/3 p-4 border-2 rounded-lg cursor-pointer transition-all hover:scale-105 ${
              selectedRole === role.id
                ? "border-[#D6482B] bg-[#fff5f3] shadow-lg"
                : "border-gray-200 hover:border-[#D6482B]"
            }`}
            onClick={() => setSelectedRole(role.id)}
          >
            <h3 className="font-semibold text-lg mb-2 text-center">
              {role.label}
            </h3>
            <p className="text-gray-600 text-sm text-center">
              {role.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-4">
        {isSignedIn ? (
          <Link
            to={`/logout?role=${selectedRole}`}
            className={`px-6 py-2 rounded-md font-semibold ${
              selectedRole
                ? "border-2 border-[#D6482B] text-[#D6482B] hover:bg-[#fff5f3]"
                : "border-2 border-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Logout
          </Link>
        ) : (
          <>
            <Link
              to={`/sign-up?role=${selectedRole}`}
              className={`px-6 py-2 rounded-md font-semibold ${
                selectedRole
                  ? "bg-[#D6482B] text-white hover:bg-[#b8381e]"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Sign Up
            </Link>
            <Link
              to={`/login?role=${selectedRole}`}
              className={`px-6 py-2 rounded-md font-semibold ${
                selectedRole
                  ? "border-2 border-[#D6482B] text-[#D6482B] hover:bg-[#fff5f3]"
                  : "border-2 border-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default RoleSelection;
