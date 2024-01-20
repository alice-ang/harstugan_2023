import React from "react";
import { Constraints } from "./Constraints";
import Link from "next/link";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { SettingsDocument } from "../../prismicio-types";
import { classNames } from "@/lib/functions";

export const Navigation = ({
  settings,
}: {
  settings: SettingsDocument<string>;
}) => {
  return (
    <nav className={classNames("p-4 fixed md:absolute  top-0 z-10 w-full")}>
      <Constraints>
        <div className="flex justify-between items-center">
          <Logo />
          <ul className="space-x-12 text-white hidden md:block ">
            {settings.data.navigation.map((nav, index) => (
              <Link
                href={`#${settings.data.sections[index].section_id}`}
                passHref
                className="uppercase font-semibold hover:text-palette-gold"
                key={nav.label}
              >
                {nav.label}
              </Link>
            ))}
          </ul>
          <MobileNav
            links={settings.data.navigation.map((nav, index) => ({
              label: nav.label,
              href: settings.data.sections[index].section_id,
            }))}
          />
        </div>
      </Constraints>
    </nav>
  );
};

// async function getSettings() {
//   const client = createClient();
//   const settings = await client.getSingle("settings");

//   return settings;
// }
