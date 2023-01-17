import React, { useState,useEffect } from "react";
import AvailableNannies from "./AvailableNannys";
import Search from "./Search";
import DropDownBar from "./DropDownBar";

export default function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/caregivers')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      });
  }, []);


  return (
    <>
      <Search/>
      <DropDownBar/>
      <h1 className="text-center text-gray-800 text-3xl">Our Available Caregivers</h1>
      <div className="relative mx-auto mt-4 md:w-4/5 lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 grid-rows-auto gap-x-10 row-gap-4.5 md:px-0 lg:px-0 md:gap-y-10">
        {data.map((data) => (
          <AvailableNannies key={data.id} data={data}  />
        ))}
      </div>
    </>
  );
}
