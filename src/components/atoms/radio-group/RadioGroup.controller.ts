import type { RadioGroupOption } from '@types';
import type { KeyboardEvent, RefObject } from 'react';

export interface RadioGroupNavigationParams {
  options: RadioGroupOption[];
  disabled?: boolean;
  isLoading?: boolean;
}

const ARROW_KEYS = ['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'];
const FORWARD_KEYS = ['ArrowDown', 'ArrowRight'];

export function useRadioGroupNavigation({
  options,
  disabled,
  isLoading,
}: RadioGroupNavigationParams) {
  const isGroupInteractive = !disabled && !isLoading;
  const getNextEnabledIndex = (currentIndex: number, direction: 1 | -1): number => {
    if (!isGroupInteractive || options.length === 0) {
      return -1;
    }

    const hasEnabledOption = options.some((option) => !option.disabled);
    if (!hasEnabledOption) {
      return -1;
    }

    let nextIndex = currentIndex;

    for (let step = 0; step < options.length; step += 1) {
      nextIndex = (nextIndex + direction + options.length) % options.length;

      if (!options[nextIndex]?.disabled) {
        return nextIndex;
      }
    }

    return -1;
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement>,
    currentIndex: number,
    refs: RefObject<HTMLInputElement | null>[],
  ): void => {
    const { key } = event;

    if (!ARROW_KEYS.includes(key)) {
      return;
    }

    event.preventDefault();

    const direction: 1 | -1 = FORWARD_KEYS.includes(key) ? 1 : -1;
    const nextIndex = getNextEnabledIndex(currentIndex, direction);

    if (nextIndex !== -1) {
      refs[nextIndex]?.current?.focus();
    }
  };

  return { handleKeyDown, getNextEnabledIndex };
}
