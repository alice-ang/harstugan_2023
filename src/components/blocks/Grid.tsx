import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Grid = ({ blok }: any) => {
  return (
    <div
      className="grid gap-4 grid-cols-1 md:grid-cols-4"
      {...storyblokEditable(blok)}
    >
      {blok.columns.map((nestedBlok: any, index: number) => (
        <div className="border" key={nestedBlok._uid}>
          <StoryblokComponent blok={nestedBlok} />
        </div>
      ))}
    </div>
  );
};

export default Grid;
