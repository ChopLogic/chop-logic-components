import type { AccordionProps } from '@models';
import type { FC } from 'react';

import Accordion from '../Accordion';

export const AccordionExample: FC<AccordionProps> = (props) => {
  return <Accordion {...props} />;
};
