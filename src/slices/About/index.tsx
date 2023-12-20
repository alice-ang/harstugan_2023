import { Constraints } from "@/components";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

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
        className={`rounded-full h-[280px] w-[280px] border-4 border-palette-white absolute -bottom-[140px] -left-[140px] `}
      />
      <Constraints>
        <div className="grid grid-cols-2 gap-4 ">
          <div className="col-span-2 md:col-span-1 py-16 px-4 relative">
            <p className="text-xl text-palette-gold pb-6 uppercase">
              {" "}
              {slice.primary.overline}
            </p>
            <h3 className="text-5xl text-white">{slice.primary.heading}</h3>
            <p className="text-palette-light pt-4">{slice.primary.text}</p>
          </div>

          <div className="col-span-2 md:col-span-1 relative">
            {slice.primary.image.url && (
              <Image
                src={slice.primary.image.url}
                alt={slice.primary.image.alt ?? "Hårstugan"}
                style={{ objectFit: "cover" }}
                fill
                className="w-full h-full top-0 left-0 object-cover"
              />
            )}
          </div>
        </div>
      </Constraints>
    </section>
  );
};

export default About;
