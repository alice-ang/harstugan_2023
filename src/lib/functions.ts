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
