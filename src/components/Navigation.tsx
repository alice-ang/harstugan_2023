import React from "react";
import { Constraints } from "./Constraints";
import Link from "next/link";
import { Logo } from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navigation = () => {
  return (
    <nav className="p-4 absolute z-10 w-full">
      <Constraints>
        <div className="flex justify-between items-center">
          <Logo />
          <ul className="space-x-8 text-white hidden md:block">
            <Link href={"/"} passHref className="uppercase font-semibold">
              Om oss
            </Link>
            <Link href={"/"} passHref className="uppercase font-semibold">
              Priser
            </Link>
            <Link href={"/"} passHref className="uppercase font-semibold">
              Kontakt
            </Link>
          </ul>
          <button className="block md:hidden p-2 rounded bg-palette-dark border border-palette-white">
            <GiHamburgerMenu size={24} color="white" />
          </button>
        </div>
      </Constraints>
    </nav>
  );
};
