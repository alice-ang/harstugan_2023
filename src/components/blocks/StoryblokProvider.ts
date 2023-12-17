"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import { ReactNode } from "react";

/** 2. Import your components */
import Page from "./Page";
import Grid from "./Grid";
import { Feature } from "./Feature";
import Teaser from "./Teaser";
import Body from "./Body";
import { Footer } from "./Footer";
/** 3. Initialize it as usual */
storyblokInit({
  accessToken: "koy8xqXqglTnVKt10C5lLwtt",
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    page: Page,
    grid: Grid,
    feature: Feature,
    body: Body,
    footer: Footer,
  },
  apiOptions: {
    region: "eu",
  },
});

type Props = {
  children: ReactNode;
};
export default function StoryblokProvider({ children }: Props) {
  return children;
}
