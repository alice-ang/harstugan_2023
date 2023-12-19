import type { Metadata } from "next";
import { Inter, Cormorant } from "next/font/google";
import "./globals.css";
import StoryblokProvider from "@/components/blocks/StoryblokProvider";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import TanStackProvider from "../../providers/TanStackProvider";
import { montserrat, cormorant, allura } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Hårstugan i Nora",
  description: "",
};

storyblokInit({
  accessToken: "koy8xqXqglTnVKt10C5lLwtt",
  use: [apiPlugin],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoryblokProvider>
      <TanStackProvider>
        <html lang="en">
          <body
            className={`${cormorant.variable} ${allura.variable} ${montserrat.variable} font-sans `}
          >
            {children}
          </body>
        </html>
      </TanStackProvider>
    </StoryblokProvider>
  );
}
