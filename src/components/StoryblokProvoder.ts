"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import { ReactNode } from "react";

/** 2. Import your components */
import Page from "./Page";
import Grid from "./Grid";
import { Feature } from "./Feature";
import Teaser from "./Teaser";
/** 3. Initialize it as usual */
storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    page: Page,
    grid: Grid,
    feature: Feature,
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
