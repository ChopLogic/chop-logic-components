import { ChopLogicIconName } from '../../../../enums';
import { ButtonHTMLAttributes, FC, MouseEvent } from '../../../../../node_modules/react';
type Props = {
    label?: string;
    icon?: ChopLogicIconName;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export declare const InnerButton: FC<Props>;
export {};
