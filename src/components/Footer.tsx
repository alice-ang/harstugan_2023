import React from "react";
import { Constraints } from "./Constraints";
import { Logo } from "./Logo";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { getCurrentYear } from "@/lib/functions";

export const Footer = () => {
  return (
    <footer className="bg-black">
      <Constraints>
        <div className="py-16 flex flex-wrap justify-center md:justify-between gap-8 px-4">
          <div className="order-last md:order-first">
            <Logo />
            <p className="text-palette-light">Prästgatan 5B, 713 31 Nora</p>
            <p className="text-palette-light">Telnr: 0587 - 100 34</p>
            <div className="space-x-4 flex pt-12">
              <a
                className="bg-white w-fit p-1 rounded-full"
                href="https://www.facebook.com/profile.php?id=100040185922018"
                target="_blank"
              >
                <FaFacebook size={16} />
              </a>
              <a
                className="bg-white w-fit p-1 rounded-full"
                href="https://www.instagram.com/harstugan/"
                target="_blank"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
          <div>
            <p className="uppercase text-xl text-palette-light pb-2">
              Öppettider
            </p>
            <p className="text-white">Mån - fre / 09:30 - 18:00</p>
            <p className="text-palette-white">Lördag / 09:00 - 13:00</p>
            <p className="text-palette-white">Söndag / STÄNGT</p>
          </div>
        </div>
      </Constraints>

      <p className="text-center text-white uppercase p-4 text-sm">
        &copy; Hårstugan {`${getCurrentYear()}`}
      </p>
    </footer>
  );
};
