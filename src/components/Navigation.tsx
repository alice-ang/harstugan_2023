import React from "react";
import { Constraints } from "./Constraints";
import Link from "next/link";
import Image from "next/image";

export const Navigation = () => {
  return (
    <nav className="p-4 absolute z-10 w-full">
      <Constraints>
        <div className="flex justify-between items-center">
          <Image
            src={"/harstugan_logo.png"}
            alt="fruit"
            style={{ objectFit: "cover" }}
            width={160}
            height={90}
          />
          <ul className="space-x-8 text-white">
            {[0, 1, 2, 3].map((index) => (
              <Link
                href={"/"}
                key={index}
                passHref
                className="uppercase font-semibold"
              >
                Link
              </Link>
            ))}
          </ul>
        </div>
      </Constraints>
    </nav>
  );
};
