"use client";

import Image from "next/image";
import UserMenu from "./Usermenu";

export default function Header({ setSidebarOpen }) {
  return (
    <header className="bg-white shadow px-4 md:px-6 py-4 flex items-center text-black justify-between border-b border-[#C8CBD9]">
      {/* Left */}
      <div className="flex items-center gap-3">
        {/* Hamburger */}
        <button
          className="lg:hidden text-xl"
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>

        {/* Search */}
        <div className=" hidden w-38 md:w-75 lg:w-155 rounded px-3 py-2 md:ml-7 bg-[#F6F6FB]  md:flex items-center justify-between">
          <input
            type="text"
            placeholder="Search"
            className="w-[90%] focus:outline-none text-[#1F384C]"
          />
          <button className="">
            <Image src="../Icon.svg" alt="search" width={20} height={20} />
          </button>
        </div>
      </div>

      <UserMenu />
      {/* Right */}
      <div className="flex items-center gap-1 md:gap-4 mr-4 ">
        {/* Notifications */}
        <button className="relative">
          <Image
            src="../Notif Icon.svg"
            alt="notification"
            width={20}
            height={20}
          />
          <span className="absolute -top-0.5 right-0.5 bg-red-500 text-white text-xs rounded-full p-1"></span>
        </button>
      </div>
    </header>
  );
}
