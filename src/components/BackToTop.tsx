"use client";
import { classNames } from "@/lib/functions";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export const BackToTop = () => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 300 ? setIsShown(true) : setIsShown(false);
    };
    console.log(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={classNames(
        isShown ? "fixed" : "hidden",
        "z-100 bg-palette-dark duration-350 bottom-6 right-6 max-w-fit animate-bounce cursor-pointer items-center justify-center rounded-full border border-palette-gold p-2 shadow transition ease-in-out"
      )}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <FaArrowUp size={24} color="#C19A5D" />
    </div>
  );
};
