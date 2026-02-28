import { Icon } from '@components/atoms';
import { ElementSize, IconName } from '@enums';
import type { MultiSelectValue } from '@types';
import { getClassName } from '@utils';
import type { FC } from 'react';
import '../select/combobox/Combobox.css';
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
    'cl-select-combobox__icon',
    { 'cl-select-combobox__icon_opened': opened },
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
      className="cl-select-combobox"
    >
      <MultiSelectComboboxSelectedValues values={values} placeholder={placeholder} />
      <Icon name={IconName.ChevronDown} className={iconClass} size={ElementSize.Small} />
    </button>
  );
};
