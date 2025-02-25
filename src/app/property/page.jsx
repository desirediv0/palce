import React from "react";
import Image from "next/image";
import data from "@/components/card-data";
import Cards from "@/components/cards";

const Page = () => {
  return (
    <>
      <div className="grid grid-cols-3 place-items-center pl-6">
        <Cards />
      </div>
    </>
  );
};

export default Page;
