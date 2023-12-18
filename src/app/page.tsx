import {
  Constraints,
  Footer,
  ImageGrid,
  Navigation,
  Prices,
} from "@/components";
import { getStoryblokApi } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";
import Image from "next/image";

export default async function Home() {
  // const { data } = await fetchData();

  const ringSize = 280;
  return (
    <main>
      <section className="w-full h-[640px] relative">
        <Navigation />
        <Image
          src={"https://source.unsplash.com/random/1920×1030/?hair,salon"}
          alt="fruit"
          style={{ objectFit: "cover" }}
          fill
          className="w-full h-full top-0 left-0 object-cover"
        />
        <div className="backdrop-blur-md bg-black/10 md:w-[40%] flex-col justify-center py-24 items-center h-full">
          <h1 className="uppercase text-6xl text-white">Hårstugan i Nora</h1>
        </div>
      </section>
      <section className="py-12 bg-palette-cream">
        <h2>Logo</h2>
      </section>
      <section className=" bg-palette-dark relative">
        <div
          className={`rounded-full h-[280px] w-[280px] border-4 border-palette-white absolute -bottom-[140px] -left-[140px] `}
        />
        <Constraints>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1 py-16 relative">
              <p className="text-xl text-palette-gold pb-6 uppercase">Om oss</p>
              <h3 className="text-5xl text-white">Hårstugan fyller x år</h3>
              <p className="text-palette-light pt-4">
                Hårstugan drivs av frisörmästare Jenny Carlsson. Här jobbar
                också Caroline Olsson. Både Carro och Jenny har frisörlicens
                från Frisörernas yrkesnämnd(FYN) samt tagit gesällen. Från 2021
                är vi dessutom utbildade hårologer.
              </p>
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
            <p className="text-xl uppercase text-center font-semibold">
              Välkommen
            </p>
            <h3 className="text-6xl text-center">Öppettider</h3>
            <div className="flex justify-center pt-4">
              <button className="bg-palette-dark text-white p-4 w-[140px] uppercase text-base">
                Boka nu
              </button>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1  ">
            <p className="text-xl uppercase font-semibold">
              MÅNDAG - FREDAG / 09:30-18:00
            </p>
            <p className="text-xl uppercase font-semibold">
              LÖRDAG / 09:00 - 13:00
            </p>
            <p className="text-xl uppercase font-semibold">SÖNDAG / STÄNGT</p>
          </div>
        </div>
        <div
          className={`rounded-full h-[280px] w-[280px] border-4 border-palette-gold absolute -top-[140px] -left-[140px] `}
        />
        <div
          className={`rounded-full h-[280px] w-[280px] border-4 border-palette-gold absolute -bottom-[140px] -right-[140px]`}
        />
      </section>
      <Prices />
      <ImageGrid />
      <Footer />
    </main>
  );
}

// export async function fetchData() {
//   const storyblokApi = getStoryblokApi();

//   return storyblokApi.get(`cdn/stories/home`, { version: "draft" });
// }
