import type { AccordionItemProps, AccordionProps } from '@models';
import { getClassName } from '@utils';
import type { FC } from 'react';
import styles from './Accordion.module.scss';
import { AccordionItem } from './AccordionItem';

const Accordion: FC<AccordionProps> = ({ items, className }) => {
  const accordionClass = getClassName([styles.accordion, className]);

  return (
    <div className={accordionClass}>
      {items.map((item: AccordionItemProps) => (
        <AccordionItem key={item.summary} {...item} />
      ))}
    </div>
  );
};

export default Accordion;
