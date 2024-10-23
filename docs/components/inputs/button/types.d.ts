import { ChopLogicIconName } from '../../../../../../../../../src/components/misc/icon/Icon';
import { MouseEventHandler } from '../../../../node_modules/react';

export type ChopLogicButtonView = 'primary' | 'secondary' | 'danger' | 'icon';
export type ChopLogicButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: MouseEventHandler<HTMLButtonElement> | (() => void);
  view?: ChopLogicButtonView;
  label?: string;
  icon?: ChopLogicIconName;
  text?: string;
  extended?: boolean;
};
