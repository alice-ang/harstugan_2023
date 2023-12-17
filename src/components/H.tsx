import React from "react";

export const H = ({ fontSize = 640 }: { fontSize?: number }) => {
  return (
    <span
      className=" text-palette-gold opacity-[6%] font-allura absolute"
      style={{ fontSize }}
    >
      H
    </span>
  );
};
