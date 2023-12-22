import type { Metadata, ResolvingMetadata } from "next";
import "./globals.css";
import TanStackProvider from "../../providers/TanStackProvider";
import { montserrat, cormorant, allura } from "@/lib/fonts";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { BackToTop, Footer, Navigation } from "@/components";
import { createClient } from "@/prismicio";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "Hårstugan Fallback", //TODO: Remove this
    description: settings.data.meta_description,
    openGraph: {
      images: [settings.data.og_image.url || ""], //TODO: Add local image as fallback
    },
  };
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TanStackProvider>
      <html lang="en">
        <body
          className={`${cormorant.variable} ${allura.variable} ${montserrat.variable} font-sans `}
        >
          <Navigation />
          {children}
          <BackToTop />
          <PrismicPreview repositoryName={repositoryName} />
          <Footer />
        </body>
      </html>
    </TanStackProvider>
  );
}
