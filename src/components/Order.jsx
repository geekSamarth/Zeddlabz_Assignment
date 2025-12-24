import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "01", last6days: 3, lastWeek: 4 },
  { day: "02", last6days: 2.5, lastWeek: 4.5 },
  { day: "03", last6days: 4, lastWeek: 3 },
  { day: "04", last6days: 3.8, lastWeek: 4.2 },
  { day: "05", last6days: 2.5, lastWeek: 3.8 },
  { day: "06", last6days: 5, lastWeek: 4.3 },
];

export default function Order() {
  return (
    <div className="w-full  p-3 md:p-6 font-sans lg:border-l lg:border-gray-200">
      {/* Header */}

      <div className="flex flex-row sm:items-center lg:justify-between gap-9 md:gap-4">
        <div>
          <p className="text-md text-black">Order</p>
          <h2 className="text-2xl font-medium text-black my-2">2.568</h2>
          <p className="text-sm text-green-600 font-semibold">
            ↑ 2.2% <span className="text-gray-500">vs last week</span>
          </p>
          <p className="text-md text-gray-500 mt-5">
            Sales from 1–12 Dec, 2020
          </p>
        </div>

        <button className="self-start sm:self-center px-4 py-2 border rounded-lg text-sm text-indigo-600 bg-[#FBFCFE] hover:bg-indigo-50 transition border-[#DDE4F0]">
          View Report
        </button>
      </div>

      {/* Chart */}
      <div style={{ width: "100%", height: 160 }}>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                borderRadius: 8,
                borderColor: "#e5e7eb",
              }}
              labelStyle={{ color: "#6B7280", fontSize: 18 }}
            />
            <Line
              type="monotone"
              dataKey="last6days"
              stroke="#4F46E5" // Indigo-600
              strokeWidth={3}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="lastWeek"
              stroke="#6c757d" // Gray-300
              strokeWidth={3}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex gap-4 mt-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-indigo-600 block"></span>
          Last 6 days
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-gray-300 block"></span>
          Last Week
        </div>
      </div>
    </div>
  );
}
