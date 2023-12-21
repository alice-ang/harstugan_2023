import { ring } from "@/lib/variables";
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
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1 space-y-4 p-4 ">
          <p className="text-xl uppercase text-center font-semibold">
            {slice.primary.overline}
          </p>
          <h3 className="text-6xl text-center"> {slice.primary.heading}</h3>
          <div className="flex justify-center pt-4">
            <button className="bg-palette-dark text-white p-2 w-[140px] uppercase text-base">
              <a href="tel:+4658710034">Ring oss</a>
            </button>
          </div>
        </div>

        <div className="col-span-2 md:col-span-1 justify-between flex-col flex p-4 space-y-4">
          {slice.items.map((hour) => (
            <p className="text-xl uppercase font-semibold" key={hour.days}>
              {hour.days} / {hour.hours}
            </p>
          ))}
        </div>
      </div>

      <div
        className={`rounded-full h-[140px] w-[140px] xl:h-[280px] xl:w-[280px] border-4 border-palette-gold absolute xl:-top-[140px] xl:-left-[140px] -top-[70px] -left-[70px]`}
      />
      <div
        className={`rounded-full h-[140px] w-[140px]  xl:h-[280px] xl:w-[280px] border-4 border-palette-gold absolute xl:-bottom-[140px] xl:-right-[140px] -bottom-[70px] -right-[70px]`}
      />
    </section>
  );
};

export default Opening;
