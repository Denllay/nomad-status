import { Box, Divider, Heading, VStack } from '@chakra-ui/react';
import { Footer, RecoveredBlock } from '@components';
import { PageLayout } from '@shared/ui';

import styles from './styles.module.scss';

const expoilterAdressesUrl = 'https://dune.com/embeds/1134306/1937261/2cbe40da-a0e4-43ac-896b-fef6d4d9fda7';
const top50ExploiterAdresses = 'https://dune.com/embeds/1138095/1943117/2cbe40da-a0e4-43ac-896b-fef6d4d9fda7';
const TotalTokensReturned = 'https://dune.com/embeds/1135137/1938708/2cbe40da-a0e4-43ac-896b-fef6d4d9fda7';

export const Main = () => {
  return (
    <PageLayout>
      <RecoveredBlock />

      <Divider w='60%' marginTop='50px' marginBottom='30px' />

      <Box w='100%'>
        <Heading className={styles.heading}>Analytics</Heading>

        <VStack spacing='50px' w='100%' marginBottom='30px'>
          <Box className={styles.chart}>
            <iframe
              src={TotalTokensReturned}
              height='200'
              width='100%'
              title='Total'
              sandbox='allow-scripts allow-same-origin'
            ></iframe>
          </Box>
          <Box className={styles.chart}>
            <iframe
              src={top50ExploiterAdresses}
              height='600'
              width='100%'
              title='Top 50 exploiter addresses'
              sandbox='allow-scripts allow-same-origin'
            ></iframe>
          </Box>
          <Box className={styles.chart}>
            <iframe
              src={expoilterAdressesUrl}
              height='600'
              width='100%'
              title='Exploiter addresses'
              sandbox='allow-scripts allow-same-origin'
            ></iframe>
          </Box>
        </VStack>
      </Box>

      <Footer />
    </PageLayout>
  );
};
