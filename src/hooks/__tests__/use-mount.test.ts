import { renderHook } from '@testing-library/react';
import { useMount } from 'hooks/use-mount';
import { describe, expect, it } from 'vitest';

describe('useMount() hook should a boolean value', () => {
  it('should return true', () => {
    const { result } = renderHook(() => useMount(true));

    expect(result.current).toBe(true);
  });

  it('should return false', () => {
    const { result } = renderHook(() => useMount(false));

    expect(result.current).toBe(false);
  });
});
