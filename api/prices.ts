const API_URL = process.env.API_URL;

export type Price = {
  title: string;
  amount: number;
  isRange: boolean;
};

export const getPrices = async () => {
  const response = await fetch(`${API_URL}/prices`);
  const prices = await response.json();
  return prices;
};
