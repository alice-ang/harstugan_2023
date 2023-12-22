"use client";
import { classNames } from "@/lib/functions";
import { KeyTextField } from "@prismicio/client";
import React, { FC, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

type MobileNavProps = {
  links: {
    label: KeyTextField;
    href: KeyTextField;
  }[];
};
export const MobileNav: FC<MobileNavProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="block md:hidden p-2 rounded bg-palette-dark border border-palette-white "
        onClick={() => setIsOpen(!isOpen)}
      >
        <GiHamburgerMenu size={24} color="white" />
      </button>
      <nav
        className={classNames(
          isOpen ? "h-screen block" : "h-0 hidden",
          "w-full flex flex-col bg-palette-dark fixed top-0 left-0 p-4"
        )}
      >
        <button
          className="block md:hidden p-2 rounded bg-palette-dark border absolute right-4 top-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MdClose size={24} color="white" />
        </button>

        <ul className="flex flex-col justify-center items-center h-full space-y-8 z-100">
          {links.map((link, index) => (
            <li key={index}>
              <a
                className="text-xl text-palette-gold pb-6 uppercase"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                href={`#${link.href}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
