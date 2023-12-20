"use client";
import React, { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { Navigation } from "./Navigation";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Constraints } from "./Constraints";

export const Slider = () => {
  const [idx, setIdx] = useState(0);

  return (
    <section className="w-full h-[640px] relative">
      <Navigation />
      <Image
        src={`https://source.unsplash.com/random/1920×1030/?hair,salon/${idx}`}
        alt="fruit"
        style={{ objectFit: "cover" }}
        fill
        className="w-full h-full top-0 left-0 object-cover"
      />
      <div className="backdrop-blur-sm bg-black/20 w-full flex-col justify-center py-24 px-4 items-center h-full">
        <Constraints>
          <div className="space-y-14">
            <div className="space-y-3">
              <h1 className="uppercase text-6xl text-white">
                Hårstugan i Nora
              </h1>
              <p className=" text-base text-palette-white pb-2">
                People that you’ll meet in our studio are doing job they love.
                Come and make sure there is a difference.
              </p>
            </div>
            <hr className="w-1/2 md:w-[260px]" />
            <p className="uppercase text-base text-palette-white pb-2">
              Verksam sedan 19XX
            </p>
          </div>
          <div className="space-x-4">
            <button
              className="bg-palette-brown p-4 border border-palette-gold"
              onClick={() => (idx == 0 ? setIdx(0) : setIdx(idx - 1))}
            >
              <FaChevronLeft size={16} color="white" />
            </button>
            <button
              className="bg-palette-brown p-4 border border-palette-gold"
              onClick={() => setIdx(idx + 1)}
            >
              <FaChevronRight size={16} color="white" />
            </button>
          </div>
        </Constraints>
      </div>
    </section>
  );
};
