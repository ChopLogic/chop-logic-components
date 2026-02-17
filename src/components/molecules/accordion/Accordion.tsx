import type { AccordionItemProps, AccordionProps } from '@types';
import { getClassName } from '@utils';
import type { FC } from 'react';
import './Accordion.css';
import { AccordionItem } from './AccordionItem';

const Accordion: FC<AccordionProps> = ({ items, className }) => {
  const accordionClass = getClassName(['cl-accordion', className]);

  return (
    <div className={accordionClass}>
      {items.map((item: AccordionItemProps) => (
        <AccordionItem key={item.summary} {...item} />
      ))}
    </div>
  );
};

export default Accordion;
