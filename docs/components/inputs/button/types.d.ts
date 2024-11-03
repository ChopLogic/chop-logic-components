import { ChopLogicIconName } from '../../../../../../../../../src/components/misc/icon/Icon';
import { CommonInputProps } from '../../../../../../../../../src/utils/types';
import { MouseEventHandler } from '../../../../node_modules/react';
import { MouseEventHandler } from '../../../../node_modules/react';

export type ChopLogicButtonView = 'primary' | 'secondary' | 'danger' | 'icon';
export type ChopLogicButtonProps = Partial<CommonInputProps> & {
  onClick?: MouseEventHandler<HTMLButtonElement> | (() => void);
  view?: ChopLogicButtonView;
  icon?: ChopLogicIconName;
  text?: string;
  extended?: boolean;
  type?: 'button' | 'reset' | 'submit';
};
