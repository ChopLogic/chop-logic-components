import { FormContext } from '@components/contexts';
import { renderHook } from '@testing-library/react';
import type { FC, PropsWithChildren } from 'react';
import { describe, expect, it } from 'vitest';

import { useFormPending } from '../use-form-pending';

describe('useFormPending', () => {
  it('should return false when no FormContext provider exists', () => {
    const { result } = renderHook(() => useFormPending());
    expect(result.current).toBe(false);
  });

  it('should return true when FormContext provides isPending as true', () => {
    const wrapper: FC<PropsWithChildren> = ({ children }) => (
      <FormContext.Provider value={{ isPending: true }}>{children}</FormContext.Provider>
    );

    const { result } = renderHook(() => useFormPending(), { wrapper });
    expect(result.current).toBe(true);
  });

  it('should return false when FormContext provides isPending as false', () => {
    const wrapper: FC<PropsWithChildren> = ({ children }) => (
      <FormContext.Provider value={{ isPending: false }}>{children}</FormContext.Provider>
    );

    const { result } = renderHook(() => useFormPending(), { wrapper });
    expect(result.current).toBe(false);
  });
});
