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
