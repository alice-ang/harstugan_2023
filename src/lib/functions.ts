import type { IconType } from "react-icons";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};
export const calculateYearsBetween = (
  startYear: number,
  endYear: number
): number => {
  // Ensure that the input years are valid
  if (!Number.isInteger(startYear) || !Number.isInteger(endYear)) {
    throw new Error("Invalid input. Please provide valid integer years.");
  }

  // Ensure that the start year is before or equal to the end year
  if (startYear > endYear) {
    throw new Error(
      "Invalid input. Start year must be less than or equal to end year."
    );
  }

  // Calculate the number of years between the two given years
  const yearsBetween = endYear - startYear;

  return yearsBetween;
};

export const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

export const renderIcon = ({
  type,
  size = 16,
}: {
  type: string;
  size: number;
}) => {
  switch (type.toLowerCase()) {
    case "instagram":
      break;
    case "facebook":
      break;
    default:
      break;
  }
};
export type InstagramImage = {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  permalink: string;
  timestamp: string;
};

export const getImages = async (): Promise<InstagramImage[]> => {
  const response = await fetch(
    `https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_KEY}&limit=10`
  );
  const res = await response.json();
  const images = res.data.filter(
    (image: InstagramImage) => image.media_type === "IMAGE"
  );

  return images.slice(0, 5);
};
