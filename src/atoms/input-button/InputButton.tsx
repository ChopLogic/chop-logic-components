import React from 'react';
import { ChopLogicIconName } from '@enums';
import styles from './InputButton.module.scss';
import { ChopLogicIcon } from '@atoms';

type InputButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  icon: ChopLogicIconName;
  disabled?: boolean;
};

const InputButton: React.FC<InputButtonProps> = ({ onClick, label, icon, disabled }) => {
  return (
    <button className={styles.inputButton} onClick={onClick} aria-label={label} type='button' disabled={disabled}>
      <ChopLogicIcon name={icon} />
    </button>
  );
};

export default InputButton;
