import React from 'react';
import { ChopLogicIconName } from '@enums';
import styles from './InnerButton.module.scss';
import { ChopLogicIcon } from '@atoms';

type Props = {
  label: string;
  icon: ChopLogicIconName;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

const InnerButton: React.FC<Props> = ({ onClick, label, icon, disabled }) => {
  return (
    <button className={styles.button} onClick={onClick} aria-label={label} type='button' disabled={disabled}>
      <ChopLogicIcon name={icon} />
    </button>
  );
};

export default InnerButton;
