import React from "react";
import { Constraints } from "./Constraints";
import { Logo } from "./Logo";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { getCurrentYear } from "@/lib/functions";
import { createClient } from "@/prismicio";

export const Footer = async () => {
  const client = createClient();

  const footer = await client.getSingle("footer");

  return (
    <footer className="bg-black">
      <Constraints>
        <div className="py-16 flex flex-wrap justify-center md:justify-between gap-8 px-4">
          <div className="order-last md:order-first">
            <Logo />

            <p className="text-palette-light"> {footer.data.adress}</p>
            <p className="text-palette-light"> {footer.data.phone}</p>
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

            {footer.data.opening_hours.map((item) => (
              <p className="text-white" key={item.days}>
                {item.days} / {item.hours}
              </p>
            ))}
          </div>
        </div>
      </Constraints>

      <p className="text-center text-white uppercase p-4 text-sm">
        &copy; {`${getCurrentYear()}`} {footer.data.copyright}
      </p>
    </footer>
  );
};
