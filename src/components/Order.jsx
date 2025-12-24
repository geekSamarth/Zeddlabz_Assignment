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

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * A chart component to display the orders data.

/*******  a3f2bc70-226e-44c4-9282-df76a047f4a5  *******/
export default function Order() {
  return (
    <div className="max-w-sm p-6 bg-white rounded-lg shadow-md font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-sm text-black">Order</p>
          <h2 className="text-3xl font-bold text-black">2.568</h2>
          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
            <svg
              className="w-4 h-4 fill-red-600"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 9.707a1 1 0 011.414 0L10 13.586V3a1 1 0 112 0v10.586l3.293-3.879a1 1 0 111.514 1.318l-5 6a1 1 0 01-1.514 0l-5-6a1 1 0 010-1.318z"
                clipRule="evenodd"
              />
            </svg>
            2.1% vs last week
          </p>
        </div>

        <button
          className="text-blue-500 text-sm font-semibold border border-blue-200 rounded px-3 py-1 hover:bg-blue-50"
          type="button"
        >
          View Report
        </button>
      </div>

      {/* Subheader */}
      <p className="text-xs text-gray-400 mb-4">Sales from 1-6 Dec, 2020</p>

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
              labelStyle={{ color: "#6B7280", fontSize: 12 }}
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
              stroke="#D1D5DB" // Gray-300
              strokeWidth={3}
              dot={false}
              strokeDasharray="5 5"
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
