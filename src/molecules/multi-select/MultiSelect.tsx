import { Label } from '@atoms';
import { useClickOutside, useElementIds, useKeyPress } from '@hooks';
import { MultiSelectProps } from '@models';
import { getClassName } from '@utils';
import { FC, useRef } from 'react';

import styles from '../select/Select.module.scss';
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
  const multiSelectClass = getClassName([styles.wrapper, className]);

  useClickOutside({ ref, onClickOutsideHandler: handleClose });
  useKeyPress({ keyCode: 'Escape', ref, onKeyPress: handleClose });

  return (
    <div ref={ref} {...rest} className={multiSelectClass}>
      <Label label={label} required={required} inputId={elementId} />
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
      <MultiSelectDropdown options={values} opened={opened} onClose={handleClose} dropdownId={dropdownId} onSelect={handleSelect} />
    </div>
  );
};

export default MultiSelect;
