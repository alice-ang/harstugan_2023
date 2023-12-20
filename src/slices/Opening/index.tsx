import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Opening`.
 */
export type OpeningProps = SliceComponentProps<Content.OpeningSlice>;

/**
 * Component for "Opening" Slices.
 */
const Opening = ({ slice }: OpeningProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for opening (variation: {slice.variation}) Slices
    </section>
  );
};

export default Opening;
