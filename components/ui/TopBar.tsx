"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const TopBar = () => {
  const router = useRouter();

  const navigateHome = () => {
    router.push("/"); // Navigate to the root '/'
  };

  return (
    <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <div
        className="text-2xl font-semibold cursor-pointer hover:cursor-pointer"
        onClick={navigateHome}
      >
        和 Ryokan
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
            Amenities
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </li>
        <li>
          <Button size="sm">Book Now</Button>
        </li>
      </ul>
    </nav>
  );
};

export default TopBar;
