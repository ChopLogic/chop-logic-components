import ArrowDownIcon from '@assets/icons/svg/ArrowDownIcon';
import ArrowUpIcon from '@assets/icons/svg/ArrowUpIcon';
import type { MultiSelectValue } from '@types';
import type { FC } from 'react';
import styles from '../select/combobox/Combobox.module.scss';
import { MultiSelectComboboxSelectedValues } from './MultiSelectComboboxSelectedValues';

type Props = {
  opened: boolean;
  disabled: boolean;
  required: boolean;
  onClick: () => void;
  comboboxId: string;
  dropdownId: string;
  values?: MultiSelectValue[];
  placeholder?: string;
  name: string;
};

export const MultiSelectCombobox: FC<Props> = ({
  opened,
  onClick,
  comboboxId,
  dropdownId,
  name,
  placeholder,
  disabled,
  required,
  values,
}) => {
  const selectedIds = values?.filter((value) => value.selected).map((value) => value.id);

  return (
    <button
      type="button"
      name={name}
      value={selectedIds}
      role="combobox"
      aria-haspopup="listbox"
      aria-expanded={opened}
      aria-controls={dropdownId}
      id={comboboxId}
      onClick={onClick}
      disabled={disabled}
      aria-required={required}
      className={styles.combobox}
    >
      <MultiSelectComboboxSelectedValues values={values} placeholder={placeholder} />
      {opened ? <ArrowUpIcon /> : <ArrowDownIcon />}
    </button>
  );
};
