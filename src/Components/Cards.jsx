import React, { useState } from "react";
import Nanny from "./AvailableNannys";
import Search from "./Search";

export default function Cards({data}) {

  return (
    <>
      <Search/>
      <h1 className="text-center text-gray-800 text-3xl">Our Available Caregivers</h1>
      <div className="relative mx-auto mt-4 md:w-4/5 lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 grid-rows-auto gap-x-10 row-gap-4.5 md:px-0 lg:px-0 md:gap-y-10">
        {data.map((data) => (
          <Nanny key={data.id} data={data} />
        ))}
      </div>
    </>
  );
}
