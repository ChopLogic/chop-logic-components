import type { AccordionItemProps, AccordionProps } from '@models';
import { getClassName } from '@utils';
import styles from './Accordion.module.scss';
import { AccordionItem } from './AccordionItem';

export function Accordion({ items, className }: AccordionProps) {
  const accordionClass = getClassName([styles.accordion, className]);

  return (
    <div className={accordionClass}>
      {items.map((item: AccordionItemProps) => (
        <AccordionItem key={item.summary} {...item} />
      ))}
    </div>
  );
}

Accordion.displayName = 'Accordion';
