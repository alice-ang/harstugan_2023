import { Constraints, ImageGrid } from "@/components";
import { getStoryblokApi } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";
import Image from "next/image";
import { Price } from "../../api/prices";

export default async function Home() {
  // const { data } = await fetchData();
  const prices = await getPrices();

  const ringSize = 280;
  return (
    <main>
      <section className="w-full relative h-[580px]">
        <Image
          src={"https://source.unsplash.com/random/1920×1030/?city,night,green"}
          alt="fruit"
          style={{ objectFit: "cover" }}
          fill
          className="w-full h-full top-0 left-0 object-cover"
        />
        <div className="backdrop-blur-md bg-black/10 md:w-[40%] h-full">
          <h1 className="uppercase text-6xl">Hårstugan i Nora</h1>
        </div>
      </section>
      <section className=" bg-palette-dark relative">
        <Constraints>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1 py-16">
              <p className="text-xl text-palette-gold pb-6">Om oss</p>
              <h3 className="text-5xl text-white">Hårstugan fyller x år</h3>
              <p className="text-white pt-4">
                Hårstugan drivs av frisörmästare Jenny Carlsson. Här jobbar
                också Caroline Olsson. Både Carro och Jenny har frisörlicens
                från Frisörernas yrkesnämnd(FYN) samt tagit gesällen. Från 2021
                är vi dessutom utbildade hårologer.
              </p>
              <div
                className={`rounded-full h-[280px] w-[280px] border-4 border-palette-white absolute -bottom-[140px] -left-[140px] `}
              />
            </div>

            <div className="col-span-2 md:col-span-1 relative">
              <Image
                src={"https://source.unsplash.com/random/1920×1030/?salon"}
                alt="fruit"
                style={{ objectFit: "cover" }}
                fill
                className="w-full h-full top-0 left-0 object-cover"
              />
            </div>
          </div>
        </Constraints>
      </section>
      <section className="bg-palette-cream flex justify-center py-16 relative overflow-hidden">
        <div className="grid grid-cols-2 gap-4 ">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <p className="text-xl uppercase text-center">Välkommen</p>
            <h3 className="text-6xl text-center">Öppettider</h3>
            <div className="flex justify-center pt-4">
              <button className="bg-palette-dark text-white p-4 w-[140px] uppercase text-base">
                Boka nu
              </button>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1  ">
            <p className="text-xl uppercase">MÅNDAG - FREDAG / 09:30-18:00</p>
            <p className="text-xl uppercase">LÖRDAG / 09:00 - 13:00</p>
            <p className="text-xl uppercase">SÖNDAG / STÄNGT</p>
          </div>
        </div>
        <div
          className={`rounded-full h-[280px] w-[280px] border-4 border-palette-gold absolute -top-[140px] -left-[140px] `}
        />
        <div
          className={`rounded-full h-[280px] w-[280px] border-4 border-palette-gold absolute -bottom-[140px] -right-[140px]`}
        />
      </section>
      <section className="bg-black flex justify-center items-center py-16 relative overflow-hidden">
        <div
          className={`rounded-full h-[280px] w-[280px] border-4 border-palette-white absolute -top-[140px] -right-[140px] `}
        />
        <div>
          <h3 className="text-white text-center text-6xl">Priser</h3>
          <p className="uppercase text-palette-light text-center pt-4">
            TILLÄGG FÖR HÅR LÄNGRE ÄN AXLARNA 150
          </p>
          <div className="space-y-6 pt-6">
            {prices.map((price: Price) => (
              <p className="uppercase text-white text-xl" key={price.title}>
                {price.title}
              </p>
            ))}
          </div>
        </div>
      </section>
      <ImageGrid />
      <footer className="bg-black">
        <Constraints>
          <div className="py-16 flex justify-between">
            <div className="bg-neutral-400 h-[260px] col-span-2 w-[260px]" />
            <div className="bg-neutral-400 h-[260px] col-span-2 w-[260px]" />
          </div>
        </Constraints>

        <p className="text-center text-white uppercase p-4">
          &copy; Hårstugan {`${new Date().getFullYear()}`}
        </p>
      </footer>
    </main>
  );
}

// export async function fetchData() {
//   const storyblokApi = getStoryblokApi();

//   return storyblokApi.get(`cdn/stories/home`, { version: "draft" });
// }

export const getPrices = async () => {
  const API_URL = process.env.API_URL;

  const response = await fetch(`${API_URL}/prices`);
  const prices = await response.json();

  return prices as Price[];
};
