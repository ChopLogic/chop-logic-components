import React from 'react';
import { ChopLogicIconName } from '@enums';
import styles from './ButtonInner.module.scss';
import { ChopLogicIcon } from '@atoms';

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  icon: ChopLogicIconName;
  disabled?: boolean;
};

const ButtonInner: React.FC<Props> = ({ onClick, label, icon, disabled }) => {
  return (
    <button className={styles.button} onClick={onClick} aria-label={label} type='button' disabled={disabled}>
      <ChopLogicIcon name={icon} />
    </button>
  );
};

export default ButtonInner;
