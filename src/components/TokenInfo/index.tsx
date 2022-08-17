import { Box, Progress, Text, Tooltip } from '@chakra-ui/react';

import styles from './styles.module.scss';

interface Props {
  label: string;
  balance: number;
  value: number;
}

const formatNumber = (number: number) => {
  return new Intl.NumberFormat('ru-RU').format(Number(number.toFixed(2)));
};

export const TokenInfo = ({ value, balance, label }: Props) => {
  const currentValue = value / (balance / 100);

  return (
    <Tooltip hasArrow bg='active' label={`${currentValue.toFixed(1)}%`}>
      <Box className={styles.main}>
        <Box className={styles.label}>
          <Text>{label}</Text>

          <Text>
            {formatNumber(value)}/{formatNumber(balance)}
          </Text>
        </Box>

        <Progress background='brand.200' colorScheme='brand' size='sm' value={currentValue} />
      </Box>
    </Tooltip>
  );
};
