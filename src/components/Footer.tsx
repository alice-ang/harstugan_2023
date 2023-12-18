import React from "react";
import { Constraints } from "./Constraints";
import { Logo } from "./Logo";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-black">
      <Constraints>
        <div className="py-16 flex justify-between gap-4">
          <div className="">
            <Logo />
            <p className="text-palette-light">Prästgatan 5B, 713 31 Nora</p>
            <p className="text-palette-light">Telnr: 0587 - 100 34</p>
            <div className="space-x-4 flex pt-12">
              <div className="bg-white w-fit p-1 rounded-full">
                <FaFacebook size={16} />
              </div>
              <div className="bg-white w-fit p-1 rounded-full">
                <FaInstagram size={16} />
              </div>
            </div>
          </div>
          <div className="">
            <p className="uppercase text-xl text-palette-light pb-2">
              Öppettider
            </p>
            <p className="text-white">Mån - fre / 09:30 - 18:00</p>
            <p className="text-palette-white">Lördag / 09:00 - 13:00</p>
            <p className="text-palette-white">Söndag / STÄNGT</p>
          </div>
        </div>
      </Constraints>

      <p className="text-center text-white uppercase p-4">
        &copy; Hårstugan {`${new Date().getFullYear()}`}
      </p>
    </footer>
  );
};
