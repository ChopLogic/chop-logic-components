import { renderHook } from '@testing-library/react';
import { createRef } from 'react';
import { expect, test, vi } from 'vitest';

import { useClickOutside } from '../use-click-outside';

test('useClickOutside() hook should return no data', () => {
  const mockParams = {
    ref: createRef<HTMLDivElement>(),
    onClickOutsideHandler: vi.fn(),
  };

  const { result } = renderHook(() => useClickOutside(mockParams));

  expect(result.current).toBe(undefined);
});
