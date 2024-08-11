import { MouseEventHandler } from 'react';

import { CLIcon } from 'components/misc/icon/types';

export type ChopLogicButtonView = 'primary' | 'secondary' | 'danger' | 'icon';

export type ChopLogicButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: MouseEventHandler<HTMLButtonElement> | (() => void);
  view?: ChopLogicButtonView;
  label?: string;
  icon?: CLIcon;
  text?: string;
};
