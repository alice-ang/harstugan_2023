"use client";
import { Constraints } from "@/components";
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
      className="w-full h-[640px] relative"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Image
        src={slice.items[idx].image.url ?? ""}
        alt={slice.items[idx].image.alt ?? "hero image"}
        key={slice.items[idx].image.id}
        style={{ objectFit: "cover" }}
        fill
        className="w-full h-full top-0 left-0 object-cover"
      />

      <div className="backdrop-blur-sm bg-black/20 w-full py-24 px-4 h-full ">
        <Constraints>
          <div className="space-y-14 w-full md:w-1/2">
            <div className="space-y-3">
              <h1 className="uppercase text-6xl text-white">
                {slice.items[idx].title}
              </h1>
              <p className=" text-base text-palette-white pb-2">
                {slice.items[idx].text}
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
              onClick={() =>
                idx === slice.items.length - 1 ? null : setIdx(idx + 1)
              }
            >
              <FaChevronRight size={16} color="white" />
            </button>
          </div>
        </Constraints>
      </div>
    </section>
  );
};

export default Hero;
