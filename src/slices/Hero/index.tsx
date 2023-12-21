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
      className="w-full h-[640px] relative bg-palette-dark"
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

      <div className="backdrop-blur-md bg-black/40 py-24 px-6 h-full flex flex-col justify-center">
        <Constraints>
          <div className="grid grid-cols-2 pt-8">
            <div className="col-span-1" />
            <div className="space-y-8 w-full col-span-2 md:col-span-1">
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
                {slice.primary.subtitle}
              </p>
              {slice.items.length > 1 && (
                <div className="space-x-4">
                  <button
                    className="bg-palette-brown p-4 border border-palette-brown transition ease-in-out delay-150 hover:bg-palette-gold"
                    onClick={() => (idx == 0 ? setIdx(0) : setIdx(idx - 1))}
                  >
                    <FaChevronLeft size={16} color="white" />
                  </button>
                  <button
                    className="bg-palette-brown p-4 border border-palette-brown transition ease-in-out delay-150 hover:bg-palette-gold"
                    onClick={() =>
                      idx === slice.items.length - 1 ? null : setIdx(idx + 1)
                    }
                  >
                    <FaChevronRight size={16} color="white" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </Constraints>
      </div>
    </section>
  );
};

export default Hero;
