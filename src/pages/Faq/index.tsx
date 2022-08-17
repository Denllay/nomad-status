import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Link,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import { Footer } from '@components';
import { FAQ_CONFIG } from '@shared/config/faq';
import { FaqItem } from '@shared/types';
import { PageLayout } from '@shared/ui';

const LINK_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;

const renderAnswer = (answer: string, index: number) => {
  const link = answer.match(LINK_REGEX)?.[0] || null;
  const answerWithoutLink = answer.replace(LINK_REGEX, '');

  return (
    <ListItem key={index}>
      {answerWithoutLink}{' '}
      {link && (
        <Link isExternal href={link} fontWeight={300} color='white'>
          {link}
        </Link>
      )}
    </ListItem>
  );
};

const renderFaqItem = ({ title, answers }: FaqItem, index: number) => {
  const answersEl = answers.map(renderAnswer);

  return (
    <AccordionItem key={index}>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <UnorderedList>{answersEl}</UnorderedList>
      </AccordionPanel>
    </AccordionItem>
  );
};

export const Faq = () => {
  const faqItemsEl = FAQ_CONFIG.map(renderFaqItem);
  return (
    <PageLayout>
      <Heading color='white' marginBottom='10px'>
        FAQ
      </Heading>
      <Accordion marginBottom='30px' color='white' w='60%' defaultIndex={[0]} allowMultiple>
        {faqItemsEl}
      </Accordion>

      <Footer />
    </PageLayout>
  );
};
