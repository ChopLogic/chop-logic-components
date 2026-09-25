import type { RadioGroupOption } from '@types';
import { getClassName } from '@utils';
import type { ChangeEventHandler, FC, KeyboardEventHandler, RefObject } from 'react';

import './RadioGroup.css';

export const RadioGroupOptionContainer: FC<{
  option: RadioGroupOption;
  ref: RefObject<HTMLInputElement | null>;
  name: string;
  isOptionDisabled: boolean;
  isOptionSelected: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  optionId: string;
  tabIndex: number;
}> = ({
  option,
  ref,
  name,
  optionId,
  isOptionSelected,
  isOptionDisabled,
  onChange,
  onKeyDown,
  tabIndex,
}) => {
  const optionClass = getClassName([
    'cl-radio-group__option',
    {
      'cl-radio-group__option_checked': isOptionSelected,
      'cl-radio-group__option_disabled': !!isOptionDisabled,
    },
  ]);

  return (
    <label key={option.value} htmlFor={optionId} className={optionClass}>
      <input
        ref={ref}
        id={optionId}
        type="radio"
        name={name}
        value={option.value}
        checked={isOptionSelected}
        disabled={isOptionDisabled}
        tabIndex={tabIndex}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <span className="cl-radio-group__circle" aria-hidden="true" />
      <span className="cl-radio-group__label">{option.label}</span>
    </label>
  );
};
