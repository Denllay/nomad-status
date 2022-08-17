import { FC } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@shared/lib/theme';

export const withUI = (Component: FC) => () =>
  (
    <ChakraProvider theme={theme}>
      <Component />
    </ChakraProvider>
  );
