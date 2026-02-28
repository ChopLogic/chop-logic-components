import { Icon } from '@components/atoms';
import { ElementSize, IconName } from '@enums';
import type { SelectValue } from '@types';
import { getClassName } from '@utils';
import type { FC } from 'react';
import './Combobox.css';

type Props = {
  opened: boolean;
  disabled: boolean;
  required: boolean;
  onClick: () => void;
  comboboxId: string;
  dropdownId: string;
  selected?: SelectValue;
  placeholder?: string;
  name: string;
};

export const SelectCombobox: FC<Props> = ({
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
  const iconClass = getClassName([
    'cl-select-combobox__icon',
    { 'cl-select-combobox__icon_opened': opened },
  ]);

  return (
    <button
      type="button"
      name={name}
      value={selected?.id}
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
      {selected?.label ? <span>{selected?.label}</span> : <span>{placeholder}</span>}
      <Icon name={IconName.ChevronDown} className={iconClass} size={ElementSize.Small} />
    </button>
  );
};
