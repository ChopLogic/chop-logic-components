import type { AccordionItemProps, AccordionProps } from '@models';
import { AccordionItem } from './AccordionItem';

export function Accordion({ items, className }: AccordionProps) {
  return (
    <div className={className}>
      {items.map((item: AccordionItemProps) => (
        <AccordionItem key={item.summary} {...item} />
      ))}
    </div>
  );
}

Accordion.displayName = 'Accordion';
