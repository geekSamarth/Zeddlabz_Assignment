"use client";

import Image from "next/image";
import { useState } from "react";

export default function UserMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative ml-16 lg:ml-56">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2"
      >
        <div className="w-10 h-10 rounded-full bg-[#FFE6CC] text-white flex items-center justify-center text-xl">
          {/* fetches the user image when connected with a backend */}🍔
          {/* dynamically fetches the user's name when integrated with a backend */}
        </div>
        <span className="text-sm font-medium text-[#1F384C]">Delicious Burger </span>
        <Image src="../chevron_down.svg" alt="search" width={20} height={20} className="cursor-pointer" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-white shadow rounded w-40">
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
            Profile
          </button>
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
            Settings
          </button>
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
