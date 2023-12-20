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
    >
      Placeholder component for prices (variation: {slice.variation}) Slices
    </section>
  );
};

export default Prices;
