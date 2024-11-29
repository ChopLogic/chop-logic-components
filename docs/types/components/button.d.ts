import { MouseEventHandler } from '../../../node_modules/react';
import { ChopLogicIconName } from '../../enums';
import { CommonInputProps } from './_common';

export type ChopLogicButtonView = '3D' | 'flat' | 'icon';
export type ChopLogicButtonProps = Partial<CommonInputProps> & {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  view?: ChopLogicButtonView;
  icon?: ChopLogicIconName;
  text?: string;
  extended?: boolean;
  type?: 'button' | 'reset' | 'submit';
};
