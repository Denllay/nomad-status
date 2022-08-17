type Recovered = {
  balance: string;
  recovered: string;
  percentRecovered: number | undefined;
};

export type TokenBalances = { [key: string]: { balance: string } };
export type BalancesRecovered = { [key: string]: Recovered };
