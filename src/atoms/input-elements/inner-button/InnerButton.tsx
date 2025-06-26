import React, { ButtonHTMLAttributes } from 'react';
import { ChopLogicIconName } from '@enums';
import styles from './InnerButton.module.scss';
import { ChopLogicIcon } from '@atoms';
import { getClassName } from '@utils';

type Props = {
  label?: string;
  icon?: ChopLogicIconName;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const InnerButton: React.FC<Props> = ({ onClick, label, icon, disabled, className, ...rest }) => {
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

export default InnerButton;
