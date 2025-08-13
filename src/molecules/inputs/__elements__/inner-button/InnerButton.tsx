import { ChopLogicIcon } from '@atoms';
import { ChopLogicIconName } from '@enums';
import { getClassName } from '@utils';
import React, { ButtonHTMLAttributes } from 'react';

import styles from './InnerButton.module.scss';

type Props = {
  label?: string;
  icon?: ChopLogicIconName;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const InnerButton: React.FC<Props> = ({ onClick, label, icon, disabled, className, ...rest }) => {
  return (
    <button
      className={getClassName([styles.button, className])}
      onClick={onClick}
      aria-label={label}
      type='button'
      disabled={disabled}
      {...rest}
    >
      <ChopLogicIcon name={icon} />
    </button>
  );
};
