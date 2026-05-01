import { PropsWithChildren } from '../../node_modules/react';
import { ChopLogicComponentProps } from './_common';
export type AccordionItemProps = PropsWithChildren & {
    summary: string;
};
export interface AccordionProps extends ChopLogicComponentProps {
    items: AccordionItemProps[];
}
