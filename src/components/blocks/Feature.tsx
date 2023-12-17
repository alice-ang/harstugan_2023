import { storyblokEditable } from "@storyblok/react";

export const Feature = ({ blok }: any) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    {blok.name}
  </div>
);
