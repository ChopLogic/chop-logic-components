import { MouseEventHandler } from 'react';
import { CommonInputProps } from 'utils/types';

import { ChopLogicIconName } from 'components/misc/icon/Icon';

export type ChopLogicButtonView = 'primary' | 'secondary' | 'danger' | 'icon';

export type ChopLogicButtonProps = Partial<CommonInputProps> & {
  onClick?: MouseEventHandler<HTMLButtonElement> | (() => void);
  view?: ChopLogicButtonView;
  icon?: ChopLogicIconName;
  text?: string;
  extended?: boolean;
  type?: 'button' | 'reset' | 'submit';
};
