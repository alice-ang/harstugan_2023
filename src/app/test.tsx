<section className=" bg-palette-dark relative">
        <div
          className={`rounded-full h-[280px] w-[280px] border-4 border-palette-white absolute -bottom-[140px] -left-[140px] `}
        />
        <Constraints>
          <div className="grid grid-cols-2 gap-4 ">
            <div className="col-span-2 md:col-span-1 py-16 px-4 relative">
              <p className="text-xl text-palette-gold pb-6 uppercase">Om oss</p>
              <h3 className="text-5xl text-white">{`Hårstugan fyller ${calculateYearsBetween(
                1995,
                getCurrentYear()
              )} år`}</h3>
              <p className="text-palette-light pt-4">
                Hårstugan drivs av frisörmästare Jenny Carlsson. Här jobbar
                också Caroline Olsson. Både Carro och Jenny har frisörlicens
                från Frisörernas yrkesnämnd(FYN) samt tagit gesällen. Från 2021
                är vi dessutom utbildade hårologer.
              </p>
            </div>

            <div className="col-span-2 md:col-span-1 relative">
              {/* <Image
                src={"https://source.unsplash.com/random/1920×1030/?salon"}
                alt="fruit"
                style={{ objectFit: "cover" }}
                fill
                className="w-full h-full top-0 left-0 object-cover"
              /> */}
            </div>
          </div>
        </Constraints>
      </section>
      <section className="bg-palette-cream flex justify-center py-16 relative overflow-hidden ">
        <div className="grid grid-cols-2 gap-4 ">
          <div className="col-span-2 md:col-span-1 space-y-4 ">
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