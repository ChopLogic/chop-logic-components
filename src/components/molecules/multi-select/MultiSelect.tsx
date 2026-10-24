import { Label } from '@components/atoms';
import {
  useClickOutside,
  useElementIds,
  useFilterOptions,
  useFormLoading,
  useKeyPress,
} from '@hooks';
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
  isLoading: isLoadingProp,
  isSearchable = false,
  searchPlaceholder = 'Filter options...',
  ...rest
}) => {
  const isLoading = useFormLoading(isLoadingProp);
  const ref = useRef(null);
  const { elementId, dropdownId } = useElementIds(id);
  const { handleClose, handleSelect, handleToggle, opened, values } = useMultiSelectController({
    name,
    options,
    defaultValue,
    onChange,
  });

  const { filterQuery, filteredOptions, setFilterQuery, resetFilter } = useFilterOptions({
    options: values,
  });

  const multiSelectClass = getClassName([
    'cl-select',
    className,
    { 'cl-multi-select_loading': isLoading },
  ]);

  const handleCloseWithFilterReset = () => {
    resetFilter();
    handleClose();
  };

  useClickOutside({ ref, onClickOutsideHandler: handleCloseWithFilterReset });
  useKeyPress({ keyCode: 'Escape', ref, onKeyPress: handleCloseWithFilterReset });

  return (
    <div ref={ref} {...rest} className={multiSelectClass} aria-busy={isLoading}>
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
        isLoading={isLoading}
      />
      <MultiSelectDropdown
        options={filteredOptions}
        opened={opened}
        onClose={handleCloseWithFilterReset}
        dropdownId={dropdownId}
        onSelect={handleSelect}
        isSearchable={isSearchable}
        searchPlaceholder={searchPlaceholder}
        filterQuery={filterQuery}
        onFilterChange={setFilterQuery}
        onFilterReset={resetFilter}
      />
    </div>
  );
};

export default MultiSelect;
