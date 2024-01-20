"use client";
import React from "react";
import { Constraints } from "./Constraints";
import Image from "next/image";
import { classNames, getImages } from "@/lib/functions";
import { FaInstagram } from "react-icons/fa";

import { useQuery } from "@tanstack/react-query";
import { H } from "./H";
import { SkeletonImage } from ".";

export const ImageGrid = () => {
  const { data: images } = useQuery({
    queryKey: ["images"],
    queryFn: getImages,
  });

  return (
    <section className="md:py-16 p-4">
      <Constraints>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-6">
          {images
            ? images.map((image, index) => (
                <div
                  className={classNames(
                    "aspect-square bg-gray-200 overflow-hidden rounded col-span-1 md:col-span-2 relative"
                  )}
                  key={image.id}
                >
                  <Image
                    alt={image.caption}
                    src={image.media_url}
                    fill
                    sizes="(max-width: 440px) 50vw, 440px"
                    className="group-hover:opacity-75 object-cover"
                  />
                </div>
              ))
            : [0, 1, 2, 3, 4].map((index) => <SkeletonImage key={index} />)}

          {images ? (
            <div className="  rounded p-4 h-full w-full bg-palette-dark aspect-square overflow-hidden  col-span-1 md:col-span-2 ">
              <div className="flex justify-center items-center h-full w-full uppercase">
                <div className="space-y-6 flex flex-col items-center justify-center">
                  <h3 className="text-white text-center text-6xl font-semibold">
                    Följ oss
                  </h3>
                  <div className="bg-white h-10 w-10 p-1 rounded-full flex justify-center items-center">
                    <H />
                    <a
                      href="https://www.instagram.com/harstugan/"
                      target="_blank"
                    >
                      <FaInstagram size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <SkeletonImage />
          )}
        </div>
      </Constraints>
    </section>
  );
};
