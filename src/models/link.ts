import { IconName } from '@enums';
import { AnchorHTMLAttributes, PropsWithChildren } from 'react';

export interface LinkProps extends PropsWithChildren, AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  icon?: IconName;
  iconPosition?: 'left' | 'right';
  external?: boolean;
  disabled?: boolean;
}
