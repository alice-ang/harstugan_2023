import React from "react";

import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"} passHref>
      <span className="hidden md:block">
        <Image
          src={"/harstugan_logo.png"}
          alt="fruit"
          style={{ objectFit: "cover" }}
          width={120}
          height={90}
        />
      </span>
      <span className="block md:hidden">
        <Image
          src={"/harstugan_logo.png"}
          alt="fruit"
          style={{ objectFit: "cover" }}
          width={90}
          height={90}
        />
      </span>
    </Link>
  );
};
