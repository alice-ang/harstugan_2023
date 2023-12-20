import React from "react";
import { Constraints } from "./Constraints";
import Link from "next/link";
import { Logo } from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { createClient } from "@/prismicio";

export const Navigation = async () => {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <nav className="p-4 absolute z-10 w-full">
      <Constraints>
        <div className="flex justify-between items-center">
          <Logo />
          <ul className="space-x-8 text-white hidden md:block">
            {settings.data.navigation.map((nav) => (
              <Link //TODO: Prismicnextlink
                href={"/"}
                passHref
                className="uppercase font-semibold"
                key={nav.label}
              >
                {nav.label}
              </Link>
            ))}
          </ul>
          <button className="block md:hidden p-2 rounded bg-palette-dark border border-palette-white">
            <GiHamburgerMenu size={24} color="white" />
          </button>
        </div>
      </Constraints>
    </nav>
  );
};
