import React from "react";
import { Price } from "../../api/prices";

export const Prices = async () => {
  const prices = await getPrices();
  return (
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
  );
};
export const getPrices = async () => {
  const API_URL = process.env.API_URL;

  const response = await fetch(`${API_URL}/prices`);
  const prices = await response.json();

  return prices as Price[];
};
