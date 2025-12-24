"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import MostOrdered from "@/components/MostOrdered";
import OrderTime from "@/components/OrderTime";
import { orderTimeData } from "@/data/ordertime";
import Revenue from "@/components/Revenue";
import Order from "@/components/Order";
import RatingCircles from "@/components/Rating";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Overlay (mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main */}
      <div className="flex flex-col flex-1">
        <Header setSidebarOpen={setSidebarOpen} />
        <h1 className="font-medium text-2xl text-[#1F384C] p-2 md:p-5">Dashboard</h1>
        <main className=" p-2 md:p-4 lg:p-6 overflow-y-auto">
          <div className="w-full flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-2/3">
              <Revenue />
            </div>
            <div className="w-full lg:w-1/3 divide-y-2 divide-indigo-200">
              <OrderTime data={orderTimeData} />
            </div>
          </div>
          <div className="w-full flex items-center">
            <RatingCircles />
            <MostOrdered />
            <Order />
          </div>
        </main>
      </div>
    </div>
  );
}
