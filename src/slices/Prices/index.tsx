import { H } from "@/components";
import { ring } from "@/lib/variables";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Prices`.
 */
export type PricesProps = SliceComponentProps<Content.PricesSlice>;

/**
 * Component for "Prices" Slices.
 */
const Prices = ({ slice }: PricesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-black flex justify-center items-center py-16 relative overflow-hidden px-4"
    >
      <H />

      <div
        className={`rounded-full h-[140px] w-[140px]  2xl:h-[280px] 2xl:w-[280px] border-4 border-palette-white absolute 2xl:-top-[140px] 2xl:-right-[140px] -top-[70px] -right-[70px]`}
      />
      <div className="mx-auto md:w-1/2 w-full">
        <h3 className="text-white text-center text-6xl">
          {slice.primary.heading}
        </h3>
        <p className="uppercase text-palette-light text-center pt-4">
          {slice.primary.subtitle}
        </p>
        <div className="space-y-8 py-6">
          {slice.items.map((price, index) => (
            <div className="flex justify-between" key={index}>
              <p className="uppercase text-white text-xl">{price.product}</p>
              <span className="text-palette-light">{price.price}kr</span>
            </div>
          ))}
        </div>
        <p className="uppercase text-palette-light text-center">
          {slice.primary.extra}
        </p>
      </div>
    </section>
  );
};

export default Prices;
