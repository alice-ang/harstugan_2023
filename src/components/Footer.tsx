import React from "react";
import { Constraints } from "./Constraints";
import { Logo } from "./Logo";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { getCurrentYear } from "@/lib/functions";
import { createClient } from "@/prismicio";
import Image from "next/image";

export const Footer = async () => {
  const client = createClient();

  const footer = await client.getSingle("footer");
  const settings = await client.getSingle("settings");
  return (
    <footer className="bg-black">
      <Constraints>
        <div className="px-4 md:px-0 py-16 grid grid-cols-3">
          <div className="order-2 my-8 md:m-0 md:order-1 col-span-3 md:col-span-1 text-center md:text-left">
            <div className="hidden md:block">
              <Logo />
            </div>

            <p className="text-palette-light"> {settings.data.adress}</p>
            <p className="text-palette-light">Telnr: {settings.data.phone}</p>
            <div className="space-x-4 flex pt-12 justify-center md:justify-start">
              <a
                className="bg-white w-fit p-1 rounded-full"
                href="https://www.facebook.com/profile.php?id=100040185922018"
                target="_blank"
              >
                <FaFacebook size={20} />
              </a>
              <a
                className="bg-white w-fit p-1 rounded-full"
                href="https://www.instagram.com/harstugan/"
                target="_blank"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 col-span-3 md:col-span-1 justify-center md:justify-start text-center md:text-left">
            <p className="uppercase text-xl text-palette-light pb-2 ">
              Öppettider
            </p>

            {footer.data.opening_hours.map((item) => (
              <p className="text-white" key={item.days}>
                {item.days} / {item.hours}
              </p>
            ))}
          </div>
          <div className="order-3 flex flex-row md:flex-col space-y-4 col-span-3 md:col-span-1 justify-center md:justify-end gap-4 items-center">
            {footer.data.logos.map((image, index) => (
              <Image
                key={index}
                src={image.logo.url!}
                style={{ objectFit: "contain", height: "100%" }}
                width={index == 0 ? 80 : 120}
                height={90}
                alt="footer logo w-fit h-fit"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-center items-center sflex-wrap p-6 space-x-4 text-palette-light">
          <p className="text-center  uppercase text-xs">
            &copy; {`${getCurrentYear()}`} {footer.data.copyright} | Utvecklad
            med ♥️{" "}
            <a
              className="text-center uppercase text-xs"
              href="https://www.linkedin.com/in/alice-anglesj%C3%B6-9503121a7/"
              target="_blank"
            >
              av Alice A
            </a>
          </p>
        </div>
      </Constraints>
    </footer>
  );
};
