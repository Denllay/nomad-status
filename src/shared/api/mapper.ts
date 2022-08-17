import { TokenData } from '@shared/types';

import { BalancesRecovered } from './model';

export const mapperTokenResponseToData = (data: BalancesRecovered): TokenData[] => {
  return Object.entries(data).reduce(
    (acc: TokenData[], [label, { balance, percentRecovered, recovered }]): TokenData[] => {
      if (percentRecovered) {
        return [
          ...acc,
          {
            balance,
            label,
            percentRecovered,
            recovered,
          },
        ];
      }
      return acc;
    },
    []
  );
};
