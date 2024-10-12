"use client";
import Image from "next/image";
import { signOut } from "next-auth/react";

export default function Home() {
  const handleLogout = () => {
    // Call signOut to log out the user
    signOut({
      callbackUrl: "/", // Optional: Redirect after logout (default is the home page)
    });
  };

  return (
    <div onClick={handleLogout} className="text-gray-50 p-5 bg-red-400"></div>
  );
}
