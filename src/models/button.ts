import { ButtonView, IconName } from '@enums';
import { FocusEventHandler, MouseEventHandler } from 'react';

import { ChopLogicInputProps } from './_common';

export interface ChopLogicButtonProps extends Partial<ChopLogicInputProps> {
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
