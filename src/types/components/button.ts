import { MouseEventHandler } from 'react';

import { ChopLogicButtonView, ChopLogicIconName } from '@/enums';

import { CommonInputProps } from './_common';

export type ChopLogicButtonProps = Partial<CommonInputProps> & {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  view?: ChopLogicButtonView;
  icon?: ChopLogicIconName;
  text?: string;
  extended?: boolean;
  type?: 'button' | 'reset' | 'submit';
  tooltip?: string;
};
