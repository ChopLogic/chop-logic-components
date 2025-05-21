import React from 'react';
import { ChopLogicIcon } from '@elements';
import { ChopLogicIconName } from '@enums';
import styles from './InputInnerButton.module.scss';

type ClearInputButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  icon: ChopLogicIconName;
  disabled?: boolean;
};

const InputInnerButton: React.FC<ClearInputButtonProps> = ({ onClick, label, icon, disabled }) => {
  return (
    <button className={styles.inputButton} onClick={onClick} aria-label={label} type='button' disabled={disabled}>
      <ChopLogicIcon name={icon} />
    </button>
  );
};

export default InputInnerButton;
