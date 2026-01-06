import type { ButtonView, IconName } from '@enums';
import type { FocusEventHandler, MouseEventHandler } from 'react';

import type { ChopLogicInputProps } from './_common';

export interface ButtonProps extends Partial<ChopLogicInputProps> {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  view?: ButtonView;
  icon?: IconName;
  text?: string;
  extended?: boolean;
  type?: 'button' | 'reset' | 'submit';
  tooltip?: string;
}
