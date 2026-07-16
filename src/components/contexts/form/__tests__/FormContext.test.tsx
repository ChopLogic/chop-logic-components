import { renderHook } from '@testing-library/react';
import type { FC, PropsWithChildren } from 'react';
import { useContext } from 'react';
import { describe, expect, it } from 'vitest';

import { FormContext, type FormContextProps } from '../FormContext';

function useFormContextValue() {
  return useContext(FormContext);
}

describe('FormContext', () => {
  it('should default isPending to false when no provider is given', () => {
    const { result } = renderHook(() => useFormContextValue());
    expect(result.current.isPending).toBe(false);
  });

  it('should propagate isPending as true when provider sets it', () => {
    const wrapper: FC<PropsWithChildren> = ({ children }) => (
      <FormContext.Provider value={{ isPending: true }}>{children}</FormContext.Provider>
    );

    const { result } = renderHook(() => useFormContextValue(), { wrapper });
    expect(result.current.isPending).toBe(true);
  });

  it('should propagate isPending as false when provider sets it explicitly', () => {
    const wrapper: FC<PropsWithChildren> = ({ children }) => (
      <FormContext.Provider value={{ isPending: false }}>{children}</FormContext.Provider>
    );

    const { result } = renderHook(() => useFormContextValue(), { wrapper });
    expect(result.current.isPending).toBe(false);
  });

  it('should still provide existing context fields alongside isPending', () => {
    const contextValue: FormContextProps = {
      isPending: true,
      initialValues: { name: 'test' },
      resetSignal: 1,
    };

    const wrapper: FC<PropsWithChildren> = ({ children }) => (
      <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
    );

    const { result } = renderHook(() => useFormContextValue(), { wrapper });
    expect(result.current.isPending).toBe(true);
    expect(result.current.initialValues).toEqual({ name: 'test' });
    expect(result.current.resetSignal).toBe(1);
  });
});
