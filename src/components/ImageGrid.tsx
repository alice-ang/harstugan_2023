import React from "react";
import { Constraints } from "./Constraints";

export const ImageGrid = () => {
  return (
    <section className="min-h-[30vh] py-16 px-4">
      <Constraints>
        <div className="grid grid-cols-3 gap-4">
          {[0, 1, 2, 3].map((index) => (
            <div
              className="bg-neutral-400 h-[360px] col-span-1 w-full"
              key={index}
            />
          ))}
          <div className="bg-neutral-400 h-[360px] col-span-2 w-full" />
        </div>
      </Constraints>
    </section>
  );
};
