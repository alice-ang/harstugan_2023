import React from "react";
import { Constraints } from "./Constraints";
import Link from "next/link";
import { Logo } from "./Logo";
import { createClient } from "@/prismicio";
import { MobileNav } from "./MobileNav";

export const Navigation = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <nav className="p-4 absolute z-10 w-full">
      <Constraints>
        <div className="flex justify-between items-center">
          <Logo />
          <ul className="space-x-8 text-white hidden md:block">
            {settings.data.navigation.map((nav, index) => (
              <Link //TODO: Prismicnextlink
                href={`#${settings.data.sections[index].section_id}`}
                passHref
                className="uppercase font-semibold"
                key={nav.label}
              >
                {nav.label}
              </Link>
            ))}
          </ul>
          <MobileNav
            links={settings.data.navigation.map((nav) => ({
              label: nav.label,
            }))}
          />
        </div>
      </Constraints>
    </nav>
  );
};
