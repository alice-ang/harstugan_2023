import React from "react";
import { Constraints } from "./Constraints";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="bg-transparent p-4 ">
      <Constraints>
        <div className="flex justify-between">
          <h2 className="text-2xl">Logo</h2>
          <ul className="space-x-4">
            {[0, 1, 2, 3].map((index) => (
              <Link href={"/"} key={index}>
                Link
              </Link>
            ))}
          </ul>
        </div>
      </Constraints>
    </nav>
  );
};
