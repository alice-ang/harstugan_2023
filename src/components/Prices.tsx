import React from "react";
import { Price } from "../../api/prices";
import { H } from "./H";
import Data from "../../db.json";
export const Prices = async () => {
  return (
    <section className="bg-black flex justify-center items-center py-16 relative overflow-hidden px-4">
      <H />
      <div
        className={`rounded-full h-[280px] w-[280px] border-4 border-palette-white absolute -top-[140px] -right-[140px] `}
      />
      <div className="mx-auto md:w-1/2 w-full">
        <h3 className="text-white text-center text-6xl">Priser</h3>
        <p className="uppercase text-palette-light text-center pt-4">
          TILLÄGG FÖR HÅR LÄNGRE ÄN AXLARNA 150;-
        </p>
        <div className="space-y-8 py-6">
          {Data.prices.map((price: Price) => (
            <div className="flex justify-between" key={price.title}>
              <p className="uppercase text-white text-xl">{price.title}</p>
              <span className="text-palette-light">
                {price.isRange ? "från " : ""}
                {price.amount}kr
              </span>
            </div>
          ))}
        </div>
        <p className="uppercase text-palette-light text-center">
          Ej avbokad tid debiteras
        </p>
      </div>
    </section>
  );
};
