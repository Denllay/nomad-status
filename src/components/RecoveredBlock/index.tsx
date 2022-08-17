import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { Box, CircularProgress, Divider, Heading, Select, useInterval, VStack } from '@chakra-ui/react';
import { getBalance, mapperTokenResponseToData } from '@shared/api';
import { useLocalStorage } from '@shared/hooks';
import { TokenData } from '@shared/types';

import { TokenInfo } from '..';

import styles from './styles.module.scss';

const UPDATE_INTERVAL = 600000;
const INTERVALS = [60000, 300000, 600000, 3600000];

type State = {
  isLoading: boolean;
  tokens: TokenData[] | null;
};

const initialState: State = {
  isLoading: true,
  tokens: null,
};

const renderToken = ({ balance, recovered, label }: TokenData) => {
  return <TokenInfo key={label} value={Number(recovered)} label={label} balance={Number(balance)} />;
};

const renderSelectItem = (period: number) => {
  const formattedPeriod = period / 60000;

  return (
    <option key={period} value={period} className={styles.select_item}>
      {formattedPeriod}m
    </option>
  );
};

export const RecoveredBlock = () => {
  const [updateInterval, setUpdateInterval] = useLocalStorage('UPDATE_INTERVAL', UPDATE_INTERVAL);
  const [{ tokens, isLoading }, setState] = useState(initialState);

  const updateData = useCallback(async () => {
    setState(initialState);
    const result = await getBalance();

    setState((prev) => ({ ...prev, tokens: mapperTokenResponseToData(result), isLoading: false }));
  }, []);

  useEffect(() => {
    updateData();
  }, [updateData]);

  useInterval(updateData, updateInterval);

  const onChangeInterval = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    setUpdateInterval(Number(target.value));
  };

  const tokensEl = tokens?.map(renderToken) || null;
  const intervalsEl = INTERVALS.map(renderSelectItem);

  return (
    <Box className={styles.main}>
      <Box className={styles.head}>
        <Heading color='black' fontWeight={400} marginBottom={2}>
          Total Recovered
        </Heading>

        <Box className={styles.select_box}>
          <Select
            value={updateInterval}
            className={styles.select}
            w='100px'
            bg='black'
            borderColor='black'
            color='white'
            onChange={onChangeInterval}
          >
            {intervalsEl}
          </Select>
        </Box>
      </Box>

      <Divider w='90%' marginY='10px' />

      <VStack spacing='10px' className={styles.tokens}>
        {isLoading ? <CircularProgress isIndeterminate thickness='4px' size='70px' color='active' /> : tokensEl}
      </VStack>
    </Box>
  );
};
