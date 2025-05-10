import React, { useRef } from 'react';
import { ChopLogicLabel } from '@elements';
import { useClickOutside, useElementIds, useKeyPress } from '@hooks';
import { ChopLogicMultiSelectProps } from '@models';
import SelectCombobox from './elements/Combobox';
import SelectDropdown from './elements/Dropdown';
import { useChopLogicMultiSelectController } from './controller';
import styles from '../select/Select.module.scss';
import { getClassName } from '@utils';

const ChopLogicMultiSelect: React.FC<ChopLogicMultiSelectProps> = ({
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
  const { handleClose, handleSelect, handleToggle, opened, values } = useChopLogicMultiSelectController({
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
      <ChopLogicLabel label={label} required={required} inputId={elementId} />
      <SelectCombobox
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
      <SelectDropdown options={values} opened={opened} onClose={handleClose} dropdownId={dropdownId} onSelect={handleSelect} />
    </div>
  );
};

export default ChopLogicMultiSelect;
