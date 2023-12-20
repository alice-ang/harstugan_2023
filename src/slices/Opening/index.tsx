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
      className="bg-palette-cream flex justify-center py-16 relative overflow-hidden "
    >
      <div className="grid grid-cols-2 gap-4 ">
        <div className="col-span-2 md:col-span-1 space-y-4 ">
          <p className="text-xl uppercase text-center font-semibold">
            {slice.primary.overline}
          </p>
          <h3 className="text-6xl text-center"> {slice.primary.heading}</h3>
          <div className="flex justify-center pt-4">
            <button className="bg-palette-dark text-white p-4 w-[140px] uppercase text-base">
              Ring oss
            </button>
          </div>
        </div>

        <div className="col-span-2 md:col-span-1 bg-red-500">
          {slice.items.map((hour) => (
            <p className="text-xl uppercase font-semibold" key={hour.days}>
              {hour.days} / {hour.hours}
            </p>
          ))}
        </div>
      </div>
      {/* <div
        className={`rounded-full h-[280px] w-[280px] border-4 border-palette-gold absolute -top-[140px] -left-[140px] `}
      />
      <div
        className={`rounded-full h-[280px] w-[280px] border-4 border-palette-gold absolute -bottom-[140px] -right-[140px]`}
      /> */}
    </section>
  );
};

export default Opening;
