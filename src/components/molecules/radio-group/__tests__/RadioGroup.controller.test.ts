import { renderHook } from '@testing-library/react';
import type { RadioGroupOption } from '@types';
import { describe, expect, it } from 'vitest';

import { useRadioGroupNavigation } from '../RadioGroup.controller';

const options: RadioGroupOption[] = [
  { value: 'a', label: 'A' },
  { value: 'b', label: 'B' },
  { value: 'c', label: 'C' },
];

describe('useRadioGroupNavigation', () => {
  describe('getNextEnabledIndex', () => {
    it('returns the next enabled index when the group is interactive', () => {
      const { result } = renderHook(() => useRadioGroupNavigation({ options }));

      expect(result.current.getNextEnabledIndex(0, 1)).toBe(1);
      expect(result.current.getNextEnabledIndex(0, -1)).toBe(2);
    });

    it('returns -1 when the group is disabled', () => {
      const { result } = renderHook(() => useRadioGroupNavigation({ options, disabled: true }));

      expect(result.current.getNextEnabledIndex(0, 1)).toBe(-1);
    });

    it('returns -1 when the group is loading', () => {
      const { result } = renderHook(() => useRadioGroupNavigation({ options, isLoading: true }));

      expect(result.current.getNextEnabledIndex(0, 1)).toBe(-1);
    });

    it('returns -1 when there are no options', () => {
      const { result } = renderHook(() => useRadioGroupNavigation({ options: [] }));

      expect(result.current.getNextEnabledIndex(0, 1)).toBe(-1);
    });

    it('returns -1 when every option is disabled', () => {
      const allDisabled: RadioGroupOption[] = [
        { value: 'a', label: 'A', disabled: true },
        { value: 'b', label: 'B', disabled: true },
      ];

      const { result } = renderHook(() => useRadioGroupNavigation({ options: allDisabled }));

      expect(result.current.getNextEnabledIndex(0, 1)).toBe(-1);
    });

    it('skips disabled options and wraps around to the next enabled one', () => {
      const withDisabled: RadioGroupOption[] = [
        { value: 'a', label: 'A' },
        { value: 'b', label: 'B', disabled: true },
        { value: 'c', label: 'C' },
      ];

      const { result } = renderHook(() => useRadioGroupNavigation({ options: withDisabled }));

      // From index 0 moving forward, index 1 is disabled, so it lands on 2
      expect(result.current.getNextEnabledIndex(0, 1)).toBe(2);
    });
  });
});
