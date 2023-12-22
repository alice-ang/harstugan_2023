import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `Logos`.
 */
export type LogosProps = SliceComponentProps<Content.LogosSlice>;

/**
 * Component for "Logos" Slices.
 */
const Logos = ({ slice }: LogosProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-palette-cream py-12"
    >
      <p className="uppercase text-palette-dark pb-8 text-center font-semibold text-sm">
        {slice.primary.title}
      </p>
      <div className="relative flex overflow-x-scroll justify-center">
        <div className="flex space-x-8">
          {slice.items.map((item, index) => (
            <Image
              src={item.logo.url ?? ""}
              alt={item.logo.alt ?? "logo"}
              style={{ objectFit: "cover" }}
              width={250}
              height={40}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
