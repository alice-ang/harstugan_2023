import React from "react";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/prismicio";

export const Logo = async () => {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <Link href={"/"} passHref>
      <span className="hidden md:block">
        <Image
          src={settings.data.logo.url ?? "/harstugan_logo.png"}
          alt="fruit"
          style={{ objectFit: "cover" }}
          width={120}
          height={90}
        />
      </span>
      <span className="block md:hidden">
        <Image
          src={settings.data.logo.url ?? "/harstugan_logo.png"}
          alt="fruit"
          style={{ objectFit: "cover" }}
          width={90}
          height={90}
        />
      </span>
    </Link>
  );
};
