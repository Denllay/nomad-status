import { useNavigate } from 'react-router-dom';

import { Box, Heading, Link as UILink } from '@chakra-ui/react';
import { ReactComponent as Logo } from '@shared/assets/icons/logo.svg';

import styles from './styles.module.scss';

export const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className={styles.main}>
      <Box onClick={() => navigate('/')} className={styles.item}>
        <UILink className={styles.item_text} fontWeight={300} color='black'>
          INFO
        </UILink>
      </Box>

      <Box onClick={() => navigate('/faq')} className={styles.item}>
        <UILink className={styles.item_text} fontWeight={300} color='black'>
          FAQ
        </UILink>
      </Box>

      <Box className={styles.logo}>
        <Logo fill='black' className={styles.logo_nomad} height={38} width={170} />
        <Heading
          className={styles.logo_status}
          textTransform='uppercase'
          marginTop={-1.5}
          color='black'
          fontWeight={300}
          as='h4'
          size='xs'
        >
          Recovery Status
        </Heading>
      </Box>
    </nav>
  );
};
