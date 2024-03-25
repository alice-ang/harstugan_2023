"use client";
import { foundedDate } from "@/lib/variables";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const [idx, setIdx] = useState(0);

  return (
    <section
      className=" relative bg-palette-dark "
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Image
        src={slice.items[idx].image.url ?? ""}
        alt={slice.items[idx].image.alt ?? "hero image"}
        key={slice.items[idx].image.id}
        fill
        className="object-cover bg-center  h-full"
      />
      <div className="grid grid-cols-12">
        <div className="col-span-12 xl:col-span-7 hidden xl:block"></div>
        <div className="col-span-12 xl:col-span-5 backdrop-blur bg-black/40 px-4 md:px-12 min-h-[50vh]">
          <div className="space-y-8 bottom-20 absolute ">
            <div className="space-y-3">
              <h2 className="uppercase text-5xl md:text-6xl text-white">
                {slice.items[idx].title}
              </h2>
              <p className=" text-base text-palette-white pb-2">
                {slice.items[idx].text}
              </p>
            </div>
            <hr className="w-1/3 md:w-[180px]" />
            <p className="uppercase text-palette-white pb-2 font-semibold text-sm">
              Verksamma sedan {foundedDate}
              {/* {slice.primary.subtitle} */}
            </p>
            {slice.items.length > 1 && (
              <div className="space-x-4">
                <button
                  className="bg-palette-brown p-4 border border-palette-brown transition ease-in-out delay-150 hover:bg-palette-gold"
                  onClick={() =>
                    idx == 0 ? setIdx(slice.items.length - 1) : setIdx(idx - 1)
                  }
                >
                  <FaChevronLeft size={16} color="white" />
                </button>
                <button
                  className="bg-palette-brown p-4 border border-palette-brown transition ease-in-out delay-150 hover:bg-palette-gold"
                  onClick={() =>
                    idx === slice.items.length - 1 ? setIdx(0) : setIdx(idx + 1)
                  }
                >
                  <FaChevronRight size={16} color="white" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
