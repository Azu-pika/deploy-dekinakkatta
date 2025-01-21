"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const TopBar = () => {
  const router = useRouter();

  const navigateHome = () => {
    router.push("/"); // Navigate to the root '/'
  };

  return (
    <>
      {/* Top Bar for Login and Language Selection */}
      <div className="bg-gray-100 text-sm py-2 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Login Link */}
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Login
          </a>
          {/* Language Selection */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Languages
            </a>
           
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div
          className="flex items-center text-2xl font-semibold cursor-pointer hover:cursor-pointer"
          onClick={navigateHome}
        >
          <img
            src="/assets/logo.png" // Path to your logo
            alt="Logo"
            className="w-8 h-8 mr-2"
          />
          和 旅館
        </div>
        <ul className="flex items-center space-x-6">
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Rooms
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Recreation
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Restaurant
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Offer
            </a>
          </li>
          <li>
            <Button size="sm">Book Now</Button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TopBar;
