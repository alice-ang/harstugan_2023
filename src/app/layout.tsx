import "./globals.css";
import type { Metadata } from "next";
import TanStackProvider from "../../providers/TanStackProvider";
import { montserrat, cormorant, allura } from "@/lib/fonts";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { BackToTop, Footer, Navigation } from "@/components";
import { createClient } from "@/prismicio";
import { use } from "react";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "Hårstugan i Nora",
    description: settings.data.meta_description,
    openGraph: {
      images: [settings.data.og_image.url || ""], //TODO: Add local image as fallback
    },
  };
}

async function getSettings() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return settings;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = use(getSettings());

  return (
    <TanStackProvider>
      <html lang="en">
        <body
          className={`${cormorant.variable} ${allura.variable} ${montserrat.variable} font-sans `}
        >
          <Navigation settings={settings} />
          {children}
          <BackToTop />
          <PrismicPreview repositoryName={repositoryName} />
          <Footer />
        </body>
      </html>
    </TanStackProvider>
  );
}
