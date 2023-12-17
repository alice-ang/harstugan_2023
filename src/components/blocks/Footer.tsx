import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import React from "react";

export const Footer = ({ blok }: any) => {
  return (
    <footer {...storyblokEditable(blok)} key={blok._uid}>
      <div className="grid grid-cols-2">
        <div className="col-span-2 md:col-span-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2023.7969478865018!2d15.037329716409777!3d59.51981318172589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c4567ddef2a77%3A0x65467cc777c67584!2sPr%C3%A4stgatan%205B%2C%20713%2031%20Nora!5e0!3m2!1ssv!2sse!4v1595247372627!5m2!1ssv!2sse"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen={false}
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
        <div>
          <div className="col-span-2 md:col-span-1 text-2xl">{blok.title}</div>
          <div className="grid gap-2 grid-cols-2" {...storyblokEditable(blok)}>
            {blok.columns.map((nestedBlok: any, index: number) => (
              <div className="border" key={nestedBlok._uid}>
                <StoryblokComponent blok={nestedBlok} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-2 ">
        <p className="text-center">
          Copyright &copy; {new Date().getFullYear()} | {blok.copyright}
        </p>
      </div>
    </footer>
  );
};
