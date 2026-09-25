import { useFormLoading } from '@hooks';
import type { RadioGroupProps } from '@types';
import { getClassName } from '@utils';
import { createRef, type FC, type KeyboardEvent, type RefObject, useMemo } from 'react';

import { useRadioGroupNavigation } from './RadioGroup.controller';

import './RadioGroup.css';
import { RadioGroupOptionContainer } from './ReadioGroup.option';

const RadioGroupStateless: FC<RadioGroupProps> = ({
  name,
  label,
  options,
  orientation = 'vertical',
  disabled,
  required,
  value,
  onChange,
  id,
  className,
  style,
  isLoading: isLoadingProp,
}) => {
  const isLoading = useFormLoading(isLoadingProp);
  const groupId = id ?? `radio-group-${name}`;
  const isDisabledOrLoading = disabled || isLoading;

  const { handleKeyDown: handleNavigationKeyDown } = useRadioGroupNavigation({
    options,
    disabled,
    isLoading,
  });

  const inputRefs = useMemo<RefObject<HTMLInputElement | null>[]>(
    () => options.map(() => createRef<HTMLInputElement>()),
    [options],
  );

  const rovingTabIndex = useMemo(() => {
    const selectedIndex = options.findIndex((option) => option.value === value);
    if (selectedIndex !== -1 && !options[selectedIndex]?.disabled) {
      return selectedIndex;
    }
    return options.findIndex((option) => !option.disabled);
  }, [options, value]);

  const groupClass = getClassName([
    'cl-radio-group',
    className,
    {
      'cl-radio-group_disabled': !!disabled,
      'cl-radio-group_loading': isLoading,
      'cl-radio-group_horizontal': orientation === 'horizontal',
    },
  ]);

  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement>,
    index: number,
    isOptionDisabled: boolean,
    isSelected: boolean,
  ) => {
    if (event.key === ' ') {
      event.preventDefault();

      if (!isOptionDisabled && !isSelected) {
        onChange?.(options[index]?.value);
      }

      return;
    }

    handleNavigationKeyDown(event, index, inputRefs);
  };

  return (
    <div
      id={groupId}
      role="radiogroup"
      aria-label={label}
      aria-required={required}
      aria-busy={isLoading}
      aria-orientation={orientation}
      className={groupClass}
      style={style}
    >
      {options.map((option, index) => {
        const isSelected = value === option.value;
        const isDisabled = isDisabledOrLoading || !!option.disabled;
        const tabIndex = isLoading || index !== rovingTabIndex ? -1 : 0;
        const optionId = `${groupId}-option-${option.value}`;

        return (
          <RadioGroupOptionContainer
            key={optionId}
            option={option}
            ref={inputRefs[index]}
            name={name}
            isOptionDisabled={isDisabled}
            isOptionSelected={isSelected}
            tabIndex={tabIndex}
            optionId={optionId}
            onChange={() => !isDisabled && onChange?.(option.value)}
            onKeyDown={(event) => handleKeyDown(event, index, !!isDisabled, isSelected)}
          />
        );
      })}
    </div>
  );
};

export default RadioGroupStateless;
