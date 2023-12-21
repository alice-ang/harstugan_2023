import { Constraints } from "@/components";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import { createClient } from "@/prismicio";
import { ring, ringSmall } from "@/lib/variables";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <section
      className=" bg-palette-dark relative overflow-hidden"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className={`rounded-full h-[140px] w-[140px] 2xl:h-[280px] 2xl:w-[280px] border-4 border-palette-white absolute 2xl:-bottom-[140px] 2xl:-left-[140px] -bottom-[70px] -left-[70px]`}
      />
      <Constraints>
        <div className="grid grid-cols-2 gap-4 ">
          <div className="col-span-2 md:col-span-1 py-16 px-4 relative">
            <p className="text-xl text-palette-gold pb-6 uppercase">
              {slice.primary.overline}
            </p>
            <h3 className="text-5xl text-white">{slice.primary.heading}</h3>
            <p className="text-palette-light pt-4">{slice.primary.text}</p>
          </div>

          <div className="col-span-2 md:col-span-1 relative">
            <Image
              src={slice.primary.image.url ?? ""}
              alt={slice.primary.image.alt ?? "Hårstugan"}
              style={{ objectFit: "cover" }}
              fill
              sizes="100vw"
              className="w-full h-full top-0 left-0 object-cover"
            />
          </div>
        </div>
      </Constraints>
    </section>
  );
};

export default About;
