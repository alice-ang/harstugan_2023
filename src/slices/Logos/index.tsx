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
      className="bg-palette-cream py-12 overflow-x-hidden"
    >
      <p className="uppercase text-palette-dark pb-8 text-center font-semibold text-sm">
        {slice.primary.title}
      </p>
      <div className="w-full inline-flex flex-nowrap">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {slice.items.map((item, index) => (
            <li key={index}>
              <Image
                src={item.logo.url ?? ""}
                alt={item.logo.alt ?? "logo"}
                style={{ objectFit: "cover" }}
                width={250}
                height={40}
              />
            </li>
          ))}
        </ul>
        <ul
          className=" flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {slice.items.map((item, index) => (
            <li key={index}>
              <Image
                src={item.logo.url ?? ""}
                alt={item.logo.alt ?? "logo"}
                style={{ objectFit: "cover" }}
                width={250}
                height={40}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Logos;
