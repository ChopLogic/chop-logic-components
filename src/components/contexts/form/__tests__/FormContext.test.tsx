import { act, renderHook } from '@testing-library/react';
import type { FC, PropsWithChildren } from 'react';
import { useContext, useState } from 'react';
import { describe, expect, it, vi } from 'vitest';

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

  it('should default onChangeFormInput to undefined when no provider is given', () => {
    const { result } = renderHook(() => useFormContextValue());
    expect(result.current.onChangeFormInput).toBeUndefined();
  });

  it('should default initialValues to undefined when no provider is given', () => {
    const { result } = renderHook(() => useFormContextValue());
    expect(result.current.initialValues).toBeUndefined();
  });

  it('should default resetSignal to undefined when no provider is given', () => {
    const { result } = renderHook(() => useFormContextValue());
    expect(result.current.resetSignal).toBeUndefined();
  });

  it('should propagate onChangeFormInput callback from provider', () => {
    const mockOnChange = vi.fn();
    const wrapper: FC<PropsWithChildren> = ({ children }) => (
      <FormContext.Provider value={{ onChangeFormInput: mockOnChange }}>
        {children}
      </FormContext.Provider>
    );

    const { result } = renderHook(() => useFormContextValue(), { wrapper });
    expect(result.current.onChangeFormInput).toBe(mockOnChange);

    result.current.onChangeFormInput?.({ name: 'field', value: 'val', valid: true });
    expect(mockOnChange).toHaveBeenCalledWith({ name: 'field', value: 'val', valid: true });
  });

  it('should propagate resetSignal value from provider', () => {
    const wrapper: FC<PropsWithChildren> = ({ children }) => (
      <FormContext.Provider value={{ resetSignal: 5 }}>{children}</FormContext.Provider>
    );

    const { result } = renderHook(() => useFormContextValue(), { wrapper });
    expect(result.current.resetSignal).toBe(5);
  });

  it('should propagate resetSignal of 0 from provider', () => {
    const wrapper: FC<PropsWithChildren> = ({ children }) => (
      <FormContext.Provider value={{ resetSignal: 0 }}>{children}</FormContext.Provider>
    );

    const { result } = renderHook(() => useFormContextValue(), { wrapper });
    expect(result.current.resetSignal).toBe(0);
  });

  it('should propagate initialValues with multiple fields from provider', () => {
    const values = { name: 'Alice', age: 30, active: true };
    const wrapper: FC<PropsWithChildren> = ({ children }) => (
      <FormContext.Provider value={{ initialValues: values }}>{children}</FormContext.Provider>
    );

    const { result } = renderHook(() => useFormContextValue(), { wrapper });
    expect(result.current.initialValues).toEqual(values);
  });

  it('should propagate empty initialValues object from provider', () => {
    const wrapper: FC<PropsWithChildren> = ({ children }) => (
      <FormContext.Provider value={{ initialValues: {} }}>{children}</FormContext.Provider>
    );

    const { result } = renderHook(() => useFormContextValue(), { wrapper });
    expect(result.current.initialValues).toEqual({});
  });

  it('should reflect updated context when provider value changes', () => {
    const signal = 0;

    const DynamicWrapper: FC<PropsWithChildren> = ({ children }) => {
      const [resetSignal, setResetSignal] = useState(signal);
      // Expose setter for testing
      (globalThis as Record<string, unknown>).__setResetSignal = setResetSignal;
      return <FormContext.Provider value={{ resetSignal }}>{children}</FormContext.Provider>;
    };

    const { result } = renderHook(() => useFormContextValue(), { wrapper: DynamicWrapper });
    expect(result.current.resetSignal).toBe(0);

    act(() => {
      ((globalThis as Record<string, unknown>).__setResetSignal as (v: number) => void)(3);
    });

    expect(result.current.resetSignal).toBe(3);

    // Cleanup
    delete (globalThis as Record<string, unknown>).__setResetSignal;
  });

  it('should provide all context fields as undefined/false with empty object value', () => {
    const wrapper: FC<PropsWithChildren> = ({ children }) => (
      <FormContext.Provider value={{}}>{children}</FormContext.Provider>
    );

    const { result } = renderHook(() => useFormContextValue(), { wrapper });
    expect(result.current.isPending).toBeUndefined();
    expect(result.current.onChangeFormInput).toBeUndefined();
    expect(result.current.initialValues).toBeUndefined();
    expect(result.current.resetSignal).toBeUndefined();
  });
});
