import type { ButtonView, IconName } from '@enums';
import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  view?: ButtonView;
  icon?: IconName;
  text?: string;
  extended?: boolean;
  tooltip?: string;
  label?: string;
}
