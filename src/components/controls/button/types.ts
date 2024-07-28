import { MouseEventHandler } from 'react';
import { Icon } from 'enums/icon';

export type ChopLogicButtonView = 'primary' | 'secondary' | 'danger' | 'icon';

export type ChopLogicButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | (() => void);
  view?: ChopLogicButtonView;
  disabled?: boolean;
  icon?: Icon;
  label?: string;
};
