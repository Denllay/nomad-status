export type FaqItem = {
  title: string;
  answers: string[];
};

export type Token = {
  address: string;
  symbol: string;
  decimals: number;
};

export type TokenData = {
  label: string;
  percentRecovered: number;
  recovered: string;
  balance: string;
};
