import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }: any) => {
  return (
    <h2 className="text-base " {...storyblokEditable(blok)}>
      {blok.text}
    </h2>
  );
};

export default Teaser;
