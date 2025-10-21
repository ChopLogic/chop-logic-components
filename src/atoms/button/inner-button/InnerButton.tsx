import { Icon } from '@atoms';
import type { IconName } from '@enums';
import { getClassName } from '@utils';
import type { ButtonHTMLAttributes, FC, MouseEvent } from 'react';

import styles from './InnerButton.module.scss';

type Props = {
  label?: string;
  icon?: IconName;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const InnerButton: FC<Props> = ({ onClick, label, icon, disabled, className, ...rest }) => {
  return (
    <button
      className={getClassName([styles.button, className])}
      onClick={onClick}
      aria-label={label}
      type="button"
      disabled={disabled}
      {...rest}
    >
      <Icon name={icon} />
    </button>
  );
};
