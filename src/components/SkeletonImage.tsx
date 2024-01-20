import React from "react";
import { FaImage } from "react-icons/fa";

export const SkeletonImage = () => {
  return (
    <div className=" p-4 h-full w-full bg-gray-200 aspect-square  rounded overflow-hidden  col-span-1 md:col-span-2 ">
      <div className="flex justify-center items-center h-full w-full border animate-pulse  rounded">
        <FaImage color="grey" size={100} />
      </div>
    </div>
  );
};
