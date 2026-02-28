import type { MultiSelectValue } from '@types';
import { getClassName, handleDropdownListKeyPress } from '@utils';
import type { FC } from 'react';

import '../select/dropdown/Dropdown.css';
import { MultiSelectOption } from './Option';

type Props = {
  options: MultiSelectValue[];
  opened: boolean;
  dropdownId: string;
  onClose: () => void;
  onSelect: (id: string) => void;
};

export const MultiSelectDropdown: FC<Props> = ({
  options,
  opened,
  onClose,
  onSelect,
  dropdownId,
}) => {
  const dropdownClass = getClassName([
    'cl-select-dropdown',
    { 'cl-select-dropdown_opened': opened },
  ]);

  return (
    <ul
      role="listbox"
      id={dropdownId}
      tabIndex={-1}
      onKeyDown={(e) => handleDropdownListKeyPress({ e, options, onClose })}
      className={dropdownClass}
    >
      {options.map((item) => (
        <MultiSelectOption key={item.id} value={item} onSelect={() => onSelect(item.id)} />
      ))}
    </ul>
  );
};
