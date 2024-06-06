import React from 'react';
import ChopLogicMultiSelect, { ChopLogicMultiSelectProps, MultiSelectValue } from '../MultiSelect';

const LANGUAGES: MultiSelectValue[] = [
  { id: '1', label: 'English', selected: false },
  { id: '2', label: 'Spanish', selected: false },
  { id: '3', label: 'French', selected: false },
];

const Example: React.FC<ChopLogicMultiSelectProps> = ({
  id = 'example-multiselect',
  name = 'languages',
  label = 'Select Languages',
  values = LANGUAGES,
  placeholder = 'Select languages',
  required = true,
  disabled = false,
}) => {
  return (
    <div>
      <ChopLogicMultiSelect
        id={id}
        name={name}
        label={label}
        values={values}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </div>
  );
};

export default Example;
