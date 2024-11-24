import { MouseEventHandler } from 'react';
import { CommonInputProps } from 'utils/types';

import { ChopLogicIconName } from 'components/misc/icon/Icon';

export type ChopLogicButtonView = '3D' | 'flat' | 'icon';

export type ChopLogicButtonProps = Partial<CommonInputProps> & {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  view?: ChopLogicButtonView;
  icon?: ChopLogicIconName;
  text?: string;
  extended?: boolean;
  type?: 'button' | 'reset' | 'submit';
};
