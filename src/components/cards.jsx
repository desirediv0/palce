"use client";

import Image from "next/image";
import React from "react";
import data from "./card-data";

const Cards = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-12 p-4">
      {data.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col rounded-lg p-4 shadow-lg bg-white mx-auto"
        >
          <Image
            src={item.image}
            width={440}
            height={200}
            alt={item.description}
            className="rounded-2xl hover:scale-105 transition-transform duration-300 w-full h-auto"
          />
          <div className="w-full px-5 mt-4">
            <div className="flex items-center text-red-600 space-x-2">
              <item.address.icon className="w-5 h-5" />
              <p className="text-lg">{item.address.location}</p>
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-3">
              {item.description}
            </p>
            <div className="flex items-center border-t border-b py-4 mt-3 justify-between">
              <div className="flex items-center text-gray-600 space-x-2">
                <item.category.bed.icon className="w-5 h-5" />
                <p>{item.category.bed.beds}</p>
              </div>
              <div className="flex items-center text-gray-600 space-x-2">
                <item.category.bathroom.icons className="w-5 h-5" />
                <p>{item.category.bathroom.bathrooms}</p>
              </div>
              <div className="flex items-center text-gray-600 space-x-2">
                <item.category.area.icons className="w-5 h-5" />
                <p>{item.category.area.areas}</p>
              </div>
            </div>
            <div className="flex justify-between items-center py-6">
              <p className="text-xl font-bold text-gray-900">
                {item.price.prices}
              </p>
              <item.price.logo className="w-6 h-6 text-red-500" />
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Cards;
