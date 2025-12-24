import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "01", current: 80, last: 45 },
  { day: "02", current: 65, last: 78 },
  { day: "03", current: 72, last: 40 },
  { day: "04", current: 55, last: 70 },
  { day: "05", current: 85, last: 65 },
  { day: "06", current: 92, last: 45 },
  { day: "07", current: 80, last: 48 },
  { day: "08", current: 65, last: 78 },
  { day: "09", current: 72, last: 40 },
  { day: "10", current: 55, last: 70 },
  { day: "11", current: 85, last: 65 },
  { day: "12", current: 92, last: 45 },
];

export default function Revenue() {
  return (
    <div className="w-full max-w-5xl bg-white md:p-6">
      {/* Header */}
      <div className="flex flex-row sm:items-center lg:justify-between gap-9 md:gap-4">
        <div>
          <p className="text-md text-black">Revenue</p>
          <h2 className="text-2xl font-medium text-black my-2">
            IDR 7.852.000
          </h2>
          <p className="text-sm text-green-600 font-semibold">
            ↑ 2.1% <span className="text-gray-500">vs last week</span>
          </p>
          <p className="text-md text-gray-500 mt-5">
            Sales from 1–12 Dec, 2020
          </p>
        </div>

        <button className="self-start sm:self-center px-4 py-2 border rounded-lg text-sm text-indigo-600 bg-[#FBFCFE] hover:bg-indigo-50 transition border-[#DDE4F0] lg:mr-10">
          View Report
        </button>
      </div>

      {/* Chart */}
      <div className="mt-10 " style={{ height: 200 }}>
        <ResponsiveContainer height="100%" width="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
          >
            <XAxis
              dataKey="day"
              tick={{ fill: "#000", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              padding={{ left: 5, right: 5 }}
              textColor="#000"
            />
            <Tooltip
              cursor={{ fill: "rgba(99, 102, 241, 0.1)" }}
              formatter={(value, name) => [
                value,
                name === "current" ? "Last 6 Days" : "Last Week",
              ]}
              contentStyle={{
                borderRadius: "8px",
                borderColor: "#E5E7EB",
                fontSize: "14px",
                backgroundColor: "#dee2e6",
              }}
            />
            <Bar
              dataKey="last"
              fill="#6c757d" // gray-200
              barSize={8}
              radius={[2, 2, 0, 0]}
              maxBarSize={20}
            />
            <Bar
              dataKey="current"
              fill="#5A6ACF" // indigo-600
              barSize={8}
              radius={[2, 2, 0, 0]}
              maxBarSize={20}
            />
          </BarChart>
        </ResponsiveContainer>

        {/* Legend */}
      </div>
      <div className="flex items-center gap-6 mt-6 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-indigo-600" />
          Last 6 days
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#6c757d]" />
          Last Week
        </div>
      </div>
    </div>
  );
}
