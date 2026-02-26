import { Label } from '@components/atoms';
import { useClickOutside, useElementIds, useKeyPress } from '@hooks';
import type { MultiSelectProps } from '@types';
import { getClassName } from '@utils';
import { type FC, useRef } from 'react';

import '../select/Select.css';
import { MultiSelectCombobox } from './MultiSelect.Combobox';
import { useMultiSelectController } from './MultiSelect.controller';
import { MultiSelectDropdown } from './MultiSelect.Dropdown';

const MultiSelect: FC<MultiSelectProps> = ({
  options,
  name,
  label,
  required = false,
  placeholder = 'Not selected',
  disabled = false,
  onChange,
  defaultValue,
  id,
  className,
  ...rest
}) => {
  const ref = useRef(null);
  const { elementId, dropdownId } = useElementIds(id);
  const { handleClose, handleSelect, handleToggle, opened, values } = useMultiSelectController({
    name,
    options,
    defaultValue,
    onChange,
  });
  const multiSelectClass = getClassName(['cl-select', className]);

  useClickOutside({ ref, onClickOutsideHandler: handleClose });
  useKeyPress({ keyCode: 'Escape', ref, onKeyPress: handleClose });

  return (
    <div ref={ref} {...rest} className={multiSelectClass}>
      <Label label={label} required={required} inputId={elementId} disabled={disabled} />
      <MultiSelectCombobox
        name={name}
        opened={opened}
        comboboxId={elementId}
        dropdownId={dropdownId}
        onClick={handleToggle}
        values={values}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
      />
      <MultiSelectDropdown
        options={values}
        opened={opened}
        onClose={handleClose}
        dropdownId={dropdownId}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default MultiSelect;
