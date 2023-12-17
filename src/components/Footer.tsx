import React from "react";
import { Constraints } from "./Constraints";

export const Footer = () => {
  return (
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
  );
};
