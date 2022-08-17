import { Box, Divider, HStack, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { ReactComponent as Discord } from '@shared/assets/icons/discord.svg';
import { ReactComponent as Github } from '@shared/assets/icons/github.svg';
import { ReactComponent as Heart } from '@shared/assets/icons/heart.svg';

import styles from './styles.module.scss';

const DUNE_REFERENCE = 'https://dune.com/coldfire/nomad-bridge-exploit';
const MEDIUM_REFERENCE = 'https://medium.com/nomad-xyz-blog/nomad-bridge-hack-bounty-and-faqs-d7726aaf359e';
const GITHUB_REFERENCE = 'https://github.com/Denllay/nomad-status';
const HACK_DATA_REFERENCE = 'https://github.com/nomad-xyz/hack-data';

export const Footer = () => {
  return (
    <Box className={styles.main}>
      <Link isExternal href={GITHUB_REFERENCE}>
        <Github />
      </Link>
      <Divider marginY='20px' />
      <Box display='flex' justifyContent='space-between'>
        <Box>
          <HStack spacing='5px' className={styles.container}>
            <Text color='white'>Made with</Text>
            <Heart />
            <Text color='white'>by Denlay</Text>
            <Discord />
          </HStack>
        </Box>

        <Box>
          <Text color='white'>References</Text>
          <UnorderedList listStyleType='none'>
            <ListItem>
              <Link isExternal href={DUNE_REFERENCE} color='brand.200'>
                Dune
              </Link>
            </ListItem>
            <ListItem>
              <Link isExternal href={MEDIUM_REFERENCE} color='brand.200'>
                Medium FAQ
              </Link>
            </ListItem>
            <ListItem>
              <Link isExternal href={HACK_DATA_REFERENCE} color='brand.200'>
                Hack data
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};
