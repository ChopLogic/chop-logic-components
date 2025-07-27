import ArrowDownIcon from '@assets/icons/svg/ArrowDownIcon.tsx';
import ArrowUpIcon from '@assets/icons/svg/ArrowUpIcon.tsx';
import { ChopLogicSelectValue } from '@models';
import React from 'react';

import styles from './Combobox.module.scss';

type Props = {
  opened: boolean;
  disabled: boolean;
  required: boolean;
  onClick: () => void;
  comboboxId: string;
  dropdownId: string;
  selected?: ChopLogicSelectValue;
  placeholder?: string;
  name: string;
};

export const SelectCombobox: React.FC<Props> = ({
  opened,
  onClick,
  comboboxId,
  dropdownId,
  selected,
  name,
  placeholder,
  disabled,
  required,
}) => {
  return (
    <button
      type='button'
      name={name}
      value={selected?.id}
      role='combobox'
      aria-haspopup='listbox'
      aria-expanded={opened}
      aria-controls={dropdownId}
      id={comboboxId}
      onClick={onClick}
      disabled={disabled}
      aria-required={required}
      className={styles.combobox}
    >
      {selected?.label ? <span>{selected?.label}</span> : <span>{placeholder}</span>}
      {opened ? <ArrowUpIcon /> : <ArrowDownIcon />}
    </button>
  );
};
