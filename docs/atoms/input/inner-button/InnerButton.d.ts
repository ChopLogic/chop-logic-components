import { ChopLogicIconName } from '../../../enums';
import { default as React, ButtonHTMLAttributes } from '../../../../node_modules/react';
type Props = {
    label?: string;
    icon?: ChopLogicIconName;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export declare const InnerButton: React.FC<Props>;
export {};
