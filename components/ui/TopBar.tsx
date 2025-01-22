"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Klee_One } from "next/font/google";
import { FaUser, FaGlobe } from "react-icons/fa"; // Import icons

const kleeOne = Klee_One({
  weight: "400", // Choose the weight you prefer
  subsets: ["latin"],
});

import { Lora } from "next/font/google";

const lora = Lora({
  weight: ["400", "700"], // Choose the weights you need
  subsets: ["latin"],
});


const TopBar = () => {
  const router = useRouter();

  const navigateHome = () => {
    router.push("/"); // Navigate to the root '/'
  };

  return (
    <>
      {/* Top Bar for Login and Language Selection */}
      <div className="bg-gray-100 text-sm py-2 px-4">
        <div className="max-w-6xl mx-auto flex justify-end items-center space-x-6">
          {/* Login Link with Icon */}
          <a href="#" className="flex items-center text-gray-600 hover:text-gray-900 space-x-1">
            <FaUser className="w-4 h-4" />
            <span className={lora.className}>Login</span>
          </a>
          {/* Language Selection with Icon */}
          <a href="#" className="flex items-center text-gray-600 hover:text-gray-900 space-x-1">
            <FaGlobe className="w-4 h-4" />
            <span className={lora.className}>Languages</span>
          </a>
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
            className="w-12 h-12 mr-2" // Updated width and height
          />
          {/* Apply the KleeOne font to this part */}
          <span className={kleeOne.className}>和旅館</span>
        </div>
        <ul className="flex items-center space-x-6">
          <li>
           <a href="#" className={`text-gray-600 hover:text-gray-900 ${lora.className}`}>
              Home
            </a>
          </li>
          <li>
           <a href="#" className={`text-gray-600 hover:text-gray-900 ${lora.className}`}>
              Rooms
            </a>
          </li>
          <li>
           <a href="#" className={`text-gray-600 hover:text-gray-900 ${lora.className}`}>
              Recreation
            </a>
          </li>
          <li>
           <a href="#" className={`text-gray-600 hover:text-gray-900 ${lora.className}`}>
              Restaurant
            </a>
          </li>
          <li>
           <a href="#" className={`text-gray-600 hover:text-gray-900 ${lora.className}`}>              Offer
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
