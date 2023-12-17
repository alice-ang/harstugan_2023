import { Cormorant, Montserrat, Allura } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const cormorant = Cormorant({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cormorant",
});

export const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allura",
});
