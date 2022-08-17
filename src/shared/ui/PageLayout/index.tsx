import { FC } from 'react';

import { Box } from '@chakra-ui/react';
import background from '@shared/assets/img/background.png';

import styles from './styles.module.scss';

export const PageLayout: FC = ({ children }) => {
  return (
    <Box className={styles.main} backgroundImage={background}>
      {children}
    </Box>
  );
};
