import { IconName } from '../enums';
import { AnchorHTMLAttributes, PropsWithChildren } from '../../node_modules/react';
export interface LinkProps extends PropsWithChildren, AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    icon?: IconName;
    iconPosition?: 'left' | 'right';
    external?: boolean;
    disabled?: boolean;
}
