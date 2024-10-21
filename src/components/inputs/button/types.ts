import { MouseEventHandler } from 'react';

import { ChopLogicIconName } from 'components/misc/icon/Icon';

export type ChopLogicButtonView = 'primary' | 'secondary' | 'danger' | 'icon';

export type ChopLogicButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: MouseEventHandler<HTMLButtonElement> | (() => void);
  view?: ChopLogicButtonView;
  label?: string;
  icon?: ChopLogicIconName;
  text?: string;
  extended?: boolean;
};
