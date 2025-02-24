"use client";

import Image from "next/image";
import React from "react";
import data from "./card-data";

const Cards = () => {
  return (
    <>
      {data.map((item, idx) => (
        <div key={idx} className="flex flex-col rounded-lg p-2 ">
          <Image
            src={item.image}
            width={440}
            height={200}
            alt={item.description}
            className="
            rounded-2xl"
          />
          <div className="w-[470px] px-5">
            <div className="flex text-[#E62E2D] pt-5 pb-4 hover:bg-red-300">
              <item.address.icon />
              <p className="text-xl pl-1">{item.address.location}</p>
            </div>
            <p className="text-3xl text-[#171B2A] font-bold pb-5">
              {item.description}
            </p>
            <div className="flex border-t-2 border-b-2 w-[400px] py-4 gap-6 ">
              <div className="flex text-[#5C5F69] border-r pr-5">
                <item.category.bed.icon />
                <p className="pl-2">{item.category.bed.beds}</p>
              </div>
              <div className="flex text-[#5C5F69] border-r pr-5">
                <item.category.bathroom.icons />
                <p className="pl-2">{item.category.bathroom.bathrooms}</p>
              </div>
              <div className="flex text-[#5C5F69] ">
                <item.category.area.icons />
                <p className="pl-2">{item.category.area.areas}</p>
              </div>
            </div>
            <div className="flex py-8 justify-between ">
              <p className="text-2xl text-[#171B2A] font-bold">
                {item.price.prices}
              </p>
              <item.price.logo
                color="red"
                className="mr-12 
              "
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
