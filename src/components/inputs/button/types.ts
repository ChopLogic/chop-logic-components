import { MouseEventHandler } from 'react';

export type ChopLogicButtonView = 'primary' | 'secondary' | 'danger' | 'icon';

export type ChopLogicButtonIcon = 'confirm' | 'cancel' | 'delete' | 'copy';

export type ChopLogicButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | (() => void);
  view?: ChopLogicButtonView;
  disabled?: boolean;
  icon?: ChopLogicButtonIcon;
  label?: string;
};
