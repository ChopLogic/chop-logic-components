import type { PropsWithChildren } from 'react';
import type { ChopLogicComponentProps } from './_common';

export type AccordionItemProps = PropsWithChildren & {
  summary: string;
};

export interface AccordionProps extends ChopLogicComponentProps {
  items: AccordionItemProps[];
}
