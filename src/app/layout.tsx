import type { Metadata } from "next";
import "./globals.css";
import TanStackProvider from "../../providers/TanStackProvider";
import { montserrat, cormorant, allura } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Hårstugan i Nora",
  description: "",
};

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
          {children}
        </body>
      </html>
    </TanStackProvider>
  );
}
