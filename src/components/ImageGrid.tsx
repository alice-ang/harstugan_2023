import React from "react";
import { Constraints } from "./Constraints";
import Image from "next/image";
import { classNames } from "@/lib/functions";

export const ImageGrid = () => {
  return (
    <section className="py-16 p-4">
      <Constraints>
        <div className="grid grid-cols-1 gap-2 md:gap-4 sm:grid-cols-2 md:grid-cols-3 ">
          {[0, 1, 2, 3].map((index) => (
            <div
              className={classNames(
                " aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
              )}
              key={index}
            >
              <img
                alt={index.toString()}
                src="https://bit.ly/placeholder-img"
                className="group-hover:opacity-75"
              />
              {/* <Image
                src={"https://bit.ly/placeholder-img"}
                alt={""}
                style={{ objectFit: "cover" }}
                fill
                className="group-hover:opacity-75 h-full w-full "
              /> */}
            </div>
          ))}
          <div className="bg-gray-200 col-span-1 md:col-span-2">Följ oss </div>
        </div>
      </Constraints>
    </section>
  );
};
