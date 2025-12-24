import React from "react";

const CircleRating = ({ percent, label, color, size }) => {
  const stroke1 = 3; // outer ring stroke width
  const stroke2 = 5; // inner ring stroke width
  const radius = size / 2 - stroke2 * 2; // inner circle radius
  const circumference = 2 * Math.PI * radius;

  // Progress offset for inner ring
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div
      className="relative flex flex-col items-center justify-center text-center font-sans"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        className="absolute top-0 left-0"
        style={{ transform: "rotate(-90deg)" }}
      >
        {/* Outer thin ring */}
        <circle
          stroke={color}
          strokeWidth={stroke1}
          fill="none"
          r={radius + stroke2 + 3}
          cx={size / 2}
          cy={size / 2}
          opacity="0.3"
        />
        {/* Inner thick ring */}
        <circle
          stroke={color}
          strokeWidth={stroke2}
          fill="none"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1s ease-out" }}
        />
      </svg>

      {/* Text content inside circle */}
      <div className="relative z-10 text-white select-none">
        <div
          className="text-center font-normal"
          style={{ fontSize: size * 0.22, lineHeight: 1 }}
        >
          <span className="block">{percent}%</span>
          <span
            className="block font-light mt-1"
            style={{ fontSize: size * 0.13 }}
          >
            {label}
          </span>
        </div>
      </div>
    </div>
  );
};

export default function RatingCircles() {
  return (
    <div className="p-8 max-w-md mx-auto font-sans text-black">
      <h2 className="text-lg font-semibold mb-1">Your Rating</h2>
      <p className="text-gray-400 mb-12">Lorem ipsum dolor sit amet, consectetur</p>

      <div className="relative flex justify-center items-center" style={{ height: 200 }}>
        {/* Hygiene - smallest, purple, top left */}
        <div
          className="absolute"
          style={{ width: 100, height: 100, top: 10, left: 0, zIndex: 3 }}
        >
          <CircleRating percent={85} label="Hygiene" color="#7C83F3" size={100} />
        </div>

        {/* Food Taste - largest, orange, center right */}
        <div
          className="absolute"
          style={{ width: 140, height: 140, top: 30, right: 0, zIndex: 1 }}
        >
          <CircleRating percent={85} label="Food Taste" color="#FBA140" size={140} />
        </div>

        {/* Packaging - medium, cyan, bottom left */}
        <div
          className="absolute"
          style={{ width: 120, height: 120, bottom: 0, left: 70, zIndex: 2 }}
        >
          <CircleRating percent={92} label="Packaging" color="#3BC2E7" size={120} />
        </div>
      </div>
    </div>
  );
}
