import { MouseEventHandler } from 'react';

export type ChopLogicButtonView = 'primary' | 'secondary' | 'danger' | 'icon';

export type ChopLogicButtonIcon =
  | 'confirm'
  | 'cancel'
  | 'delete'
  | 'copy'
  | 'back'
  | 'cut'
  | 'download'
  | 'error'
  | 'forward'
  | 'help'
  | 'info'
  | 'paste'
  | 'question'
  | 'save'
  | 'upload'
  | 'warning';

export type ChopLogicButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: MouseEventHandler<HTMLButtonElement> | (() => void);
  view?: ChopLogicButtonView;
  label?: string;
  icon?: ChopLogicButtonIcon;
  text?: string;
};
