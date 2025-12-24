import Image from "next/image";
import React from "react";

const foodItems = [
  {
    id: 1,
    name: "Fresh Salad Bowl",
    price: "IDR 45.000",
    image: "../Salad.svg",
  },
  {
    id: 2,
    name: "Chicken Noodles",
    price: "IDR 75.000",
    image: "../Noodles.svg",
  },
  {
    id: 3,
    name: "Smoothie Fruits",
    price: "IDR 45.000",
    image: "../Fruits.svg",
  },
  {
    id: 4,
    name: "Hot Chicken Wings",
    price: "IDR 45.000",
    image: "../Wings.svg",
  },
];

export default function MostOrderedFood() {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-sm p-6">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-900">Most Ordered Food</h2>
      <p className="text-sm text-gray-400 mt-1">
        Adipiscing elit, sed do eiusmod tempor
      </p>

      {/* List */}
      <div className="mt-6">
        {foodItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b last:border-b-0 last:pb-0"
          >
            <div className="flex items-start gap-3">
              <Image
                src={item.image}
                alt={item.name}
                width={90}
                height={90}
                // className="w-12 h-12 rounded-full object-cover"
              />
              <span className="text-sm font-medium text-gray-800">
                {item.name}
              </span>
            </div>
            <span className="text-sm font-semibold text-gray-600">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
