import React from "react";

const OrderTimeChart = () => {
  return (
    <div className="w-full max-w-md bg-white p-1 md:p-6 mt-7 md:mt-0">
      {/* Header */}
      <div className="flex flex-row sm:items-center lg:justify-between gap-9 md:gap-4">
        <div>
          <p className="text-md text-black">Order Time</p>

          <p className="text-md text-gray-500 mt-3">From 1–6 Dec, 2020</p>
        </div>

        <button className="self-start sm:self-center px-4 py-2 border rounded-lg text-sm text-indigo-600 bg-[#FBFCFE] hover:bg-indigo-50 transition border-[#DDE4F0] lg:mr-10">
          View Report
        </button>
      </div>

      {/* Chart Section */}
      <div className="relative flex items-center justify-center my-8">
        {/* Tooltip */}
        <div className="absolute -top-10 -right-3 md:-top-10  md:right-3 bg-slate-800 text-white rounded-xl px-4 py-3 text-sm shadow-lg z-10">
          <p className="font-medium">Afternoon</p>
          <p className="text-gray-300 text-xs">1pm – 4pm</p>
          <p className="mt-1 font-semibold text-base">1,890 orders</p>
        </div>

        {/* Donut Chart */}
        <div
          className="w-44 h-44 rounded-full relative"
          style={{
            background: `conic-gradient(
              #5A6ACF 0% 40%,
              #8593ED 40% 72%,
              #C7CEFF 72% 100%
            )`,
          }}
        >
          {/* Inner Circle */}
          <div className="absolute inset-6 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-6 md:justify-between text-sm mt-6">
        <div className="flex items-start gap-2">
          <span className="w-3 h-3 rounded-full bg-indigo-600"></span>
          <div>
            <p className="text-gray-700">Afternoon</p>
            <p className="text-gray-400">40%</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
          <div>
            <p className="text-gray-700">Evening</p>
            <p className="text-gray-400">32%</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <span className="w-3 h-3 rounded-full bg-indigo-200"></span>
          <div>
            <p className="text-gray-700">Morning</p>
            <p className="text-gray-400">28%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTimeChart;
