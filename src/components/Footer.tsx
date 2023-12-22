import React from "react";
import { Constraints } from "./Constraints";
import { Logo } from "./Logo";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { getCurrentYear } from "@/lib/functions";
import { createClient } from "@/prismicio";

export const Footer = async () => {
  const client = createClient();

  const footer = await client.getSingle("footer");
  const settings = await client.getSingle("settings");
  return (
    <footer className="bg-black">
      <Constraints>
        <div className="py-16 flex flex-wrap justify-center md:justify-between gap-8 px-4">
          <div className="order-last md:order-first">
            <Logo />

            <p className="text-palette-light"> {settings.data.adress}</p>
            <p className="text-palette-light">Telnr: {settings.data.phone}</p>
            <div className="space-x-4 flex pt-12">
              <a
                className="bg-white w-fit p-1 rounded-full"
                href="https://www.facebook.com/profile.php?id=100040185922018"
                target="_blank"
              >
                <FaFacebook size={18} />
              </a>
              <a
                className="bg-white w-fit p-1 rounded-full"
                href="https://www.instagram.com/harstugan/"
                target="_blank"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
          <div>
            <p className="uppercase text-xl text-palette-light pb-2 ">
              Öppettider
            </p>

            {footer.data.opening_hours.map((item) => (
              <p className="text-white" key={item.days}>
                {item.days} / {item.hours}
              </p>
            ))}
          </div>
        </div>
      </Constraints>
      <div className="flex flex-row justify-center md:justify-between items-center flex-wrap p-6 space-x-4">
        <p className="text-center text-palette-light uppercase text-xs">
          &copy; {`${getCurrentYear()}`} {footer.data.copyright}
        </p>
        <a
          className="text-center text-palette-light uppercase text-xs"
          href="https://www.linkedin.com/in/alice-anglesj%C3%B6-9503121a7/"
          target="_blank"
        >
          Utvecklad med ♥️ av Alice A
        </a>
      </div>
    </footer>
  );
};
