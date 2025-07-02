import { HTMLAttributes, ReactNode } from 'react';
import { ChopLogicIconName } from '@enums';

type HeaderLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface ChopLogicHeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  as?: HeaderLevel;
  icon?: ChopLogicIconName;
}
