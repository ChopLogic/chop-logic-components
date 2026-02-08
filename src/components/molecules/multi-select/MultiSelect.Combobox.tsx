import { Icon } from '@components/atoms';
import { IconName } from '@enums';
import type { MultiSelectValue } from '@types';
import { getClassName } from '@utils';
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
  const iconClass = getClassName([
    styles.combobox_icon,
    { [styles.combobox_icon__opened]: opened },
  ]);

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
      <Icon name={IconName.ChevronUp} className={iconClass} />
    </button>
  );
};
