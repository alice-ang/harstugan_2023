"use client";
import React from "react";
import { Constraints } from "./Constraints";
import Image from "next/image";
import { classNames } from "@/lib/functions";
import { FaImage, FaInstagram } from "react-icons/fa";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

type InstagramImage = {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  permalink: string;
  timestamp: string;
};
export const getImages = async (): Promise<InstagramImage[]> => {
  const response = await fetch(
    `https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_KEY}`
  );
  const res = await response.json();
  const images = res.data.filter(
    (image: InstagramImage) => image.media_type === "IMAGE"
  );
  console.log(images);
  return images.slice(0, 5);
};

export const ImageGrid = () => {
  const { data: images, status } = useQuery({
    queryKey: ["images"],
    queryFn: getImages,
  });

  return (
    <section className="py-16 p-4">
      <Constraints>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-6">
          {images
            ? images.map((image, index) => (
                <a
                  href={image.permalink}
                  target="_blank"
                  className={classNames(
                    "aspect-square bg-gray-200 rounded-lg overflow-hidden  col-span-1 md:col-span-2 relative"
                  )}
                  key={image.id}
                >
                  <Image
                    alt={image.caption}
                    src={image.media_url}
                    fill
                    className="group-hover:opacity-75 object-cover"
                  />
                </a>
              ))
            : [0, 1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className=" p-4 h-full w-full bg-gray-200 aspect-square rounded-lg overflow-hidden  col-span-1 md:col-span-2 "
                >
                  <div className="flex justify-center items-center h-full w-full border animate-pulse rounded-lg">
                    <FaImage color="grey" size={100} />
                  </div>
                </div>
              ))}
          <a
            href="https://www.instagram.com/harstugan/"
            target="_blank"
            className=" p-4 h-full w-full bg-palette-dark aspect-square rounded-lg overflow-hidden  col-span-1 md:col-span-2 "
          >
            <div className="flex justify-center items-center h-full w-full uppercase">
              <div className="space-y-4 flex flex-col items-center justify-center">
                <h3 className="text-white text-center text-6xl font-semibold">
                  Följ oss
                </h3>
                <div className="bg-white h-10 w-10 p-1 rounded-full flex justify-center items-center">
                  <FaInstagram size={22} />
                </div>
              </div>
            </div>
          </a>
        </div>
      </Constraints>
    </section>
  );
};
