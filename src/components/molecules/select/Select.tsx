import { Label } from '@components/atoms';
import { useClickOutside, useElementIds, useFormLoading, useKeyPress } from '@hooks';
import type { SelectProps } from '@types';
import { getClassName } from '@utils';
import { type FC, useRef } from 'react';

import './Select.css';
import { SelectCombobox } from './combobox/Combobox';
import { SelectDropdown } from './dropdown/Dropdown';
import { useSelectController } from './Select.controller';

const Select: FC<SelectProps> = ({
  options,
  onChange,
  name,
  label,
  defaultValue,
  id,
  placeholder = 'Not selected',
  required = false,
  disabled = false,
  className,
  isLoading: isLoadingProp,
  ...rest
}) => {
  const isLoading = useFormLoading(isLoadingProp);
  const ref = useRef<HTMLDivElement>(null);
  const { elementId, dropdownId } = useElementIds(id);
  const { handleClear, handleClose, handleSelect, handleToggle, selected, opened } =
    useSelectController({
      options,
      onChange,
      defaultValue,
      name,
    });
  const selectClass = getClassName(['cl-select', className, { 'cl-select_loading': isLoading }]);

  useClickOutside({ ref, onClickOutsideHandler: handleClose });
  useKeyPress({ keyCode: 'Escape', ref, onKeyPress: handleClose });

  // Prevent dropdown toggle when loading
  const handleComboboxClick = () => {
    if (!isLoading) {
      handleToggle();
    }
  };

  return (
    <div ref={ref} {...rest} className={selectClass} aria-busy={isLoading}>
      <Label label={label} required={required} inputId={elementId} />
      <SelectCombobox
        name={name}
        opened={isLoading ? false : opened}
        comboboxId={elementId}
        dropdownId={dropdownId}
        onClick={handleComboboxClick}
        selected={selected}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        isLoading={isLoading}
      />
      <SelectDropdown
        options={options}
        selected={selected}
        opened={isLoading ? false : opened}
        onClose={handleClose}
        dropdownId={dropdownId}
        comboboxId={elementId}
        onSelect={handleSelect}
        onClear={handleClear}
      />
    </div>
  );
};

export default Select;
