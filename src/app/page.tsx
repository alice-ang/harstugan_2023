import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { ImageGrid } from "@/components";

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />
      <ImageGrid />
    </>
  );
}
