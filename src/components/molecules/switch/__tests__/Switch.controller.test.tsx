import { act, renderHook } from '@testing-library/react';
import type { FormContextProps } from '@types';
import { type KeyboardEvent, useEffect } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { FormContext } from '../../../contexts';
import { useSwitchController } from '../Switch.controller';

// Mock the dependencies
vi.mock('./Switch.helpers', () => ({
  getSwitchInitialValue: vi.fn(({ initialValues, name, defaultChecked }) => {
    if (initialValues && name in initialValues) {
      return initialValues[name];
    }
    return defaultChecked ?? false;
  }),
}));

vi.mock('@hooks/useResetFormInput', () => ({
  useResetFormInput: vi.fn(() => {
    // Simulate the reset behavior - in real implementation this would be called on reset
    useEffect(() => {
      // This would be called when reset signal changes in real implementation
    }, []);
  }),
}));

// Test wrapper component
const createWrapper = (contextValue: FormContextProps) => {
  return ({ children }: { children: React.ReactNode }) => (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};

describe('useSwitchController', () => {
  const defaultContext: FormContextProps = {
    onChangeFormInput: vi.fn(),
    initialValues: {},
    resetSignal: 0,
  };

  const defaultProps = {
    name: 'testSwitch',
    defaultChecked: false,
    onChange: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('initializes with defaultChecked value when no initialValues provided', () => {
    const wrapper = createWrapper(defaultContext);

    const { result } = renderHook(
      () => useSwitchController({ ...defaultProps, defaultChecked: true }),
      { wrapper },
    );

    expect(result.current.checked).toBe(true);
  });

  it('initializes with initialValues when provided', () => {
    const contextWithValues: FormContextProps = {
      ...defaultContext,
      initialValues: { testSwitch: true },
    };
    const wrapper = createWrapper(contextWithValues);

    const { result } = renderHook(() => useSwitchController(defaultProps), { wrapper });

    expect(result.current.checked).toBe(true);
  });

  it('prioritizes initialValues over defaultChecked', () => {
    const contextWithValues: FormContextProps = {
      ...defaultContext,
      initialValues: { testSwitch: false },
    };
    const wrapper = createWrapper(contextWithValues);

    const { result } = renderHook(
      () => useSwitchController({ ...defaultProps, defaultChecked: true }),
      { wrapper },
    );

    expect(result.current.checked).toBe(false);
  });

  it('calls onChange and onChangeFormInput when handleChange is called', () => {
    const onChangeFormInput = vi.fn();
    const onChange = vi.fn();
    const context: FormContextProps = {
      ...defaultContext,
      onChangeFormInput,
    };
    const wrapper = createWrapper(context);

    const { result } = renderHook(() => useSwitchController({ ...defaultProps, onChange }), {
      wrapper,
    });

    act(() => {
      result.current.handleChange(true);
    });

    expect(result.current.checked).toBe(true);
    expect(onChange).toHaveBeenCalledWith(true);
    expect(onChangeFormInput).toHaveBeenCalledWith({
      name: 'testSwitch',
      value: true,
    });
  });

  it('handles handleChange without onChangeFormInput', () => {
    const onChange = vi.fn();
    const context: FormContextProps = {
      ...defaultContext,
      onChangeFormInput: undefined,
    };
    const wrapper = createWrapper(context);

    const { result } = renderHook(() => useSwitchController({ ...defaultProps, onChange }), {
      wrapper,
    });

    act(() => {
      result.current.handleChange(false);
    });

    expect(result.current.checked).toBe(false);
    expect(onChange).toHaveBeenCalledWith(false);
  });

  it('handles handleChange without onChange callback', () => {
    const onChangeFormInput = vi.fn();
    const context: FormContextProps = {
      ...defaultContext,
      onChangeFormInput,
    };
    const wrapper = createWrapper(context);

    const { result } = renderHook(() => useSwitchController({ name: 'testSwitch' }), { wrapper });

    act(() => {
      result.current.handleChange(true);
    });

    expect(result.current.checked).toBe(true);
    expect(onChangeFormInput).toHaveBeenCalledWith({
      name: 'testSwitch',
      value: true,
    });
  });

  it('toggles state on handleKeyDown with Space key', () => {
    const wrapper = createWrapper(defaultContext);

    const { result } = renderHook(() => useSwitchController(defaultProps), { wrapper });

    const mockEvent = {
      key: ' ',
      preventDefault: vi.fn(),
    } as unknown as KeyboardEvent<HTMLDivElement>;

    act(() => {
      result.current.handleKeyDown(mockEvent);
    });

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(result.current.checked).toBe(true);
  });

  it('toggles state on handleKeyDown with Enter key', () => {
    const wrapper = createWrapper(defaultContext);

    const { result } = renderHook(() => useSwitchController(defaultProps), { wrapper });

    const mockEvent = {
      key: 'Enter',
      preventDefault: vi.fn(),
    } as unknown as KeyboardEvent<HTMLDivElement>;

    act(() => {
      result.current.handleKeyDown(mockEvent);
    });

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(result.current.checked).toBe(true);
  });

  it('does nothing on handleKeyDown with other keys', () => {
    const wrapper = createWrapper(defaultContext);

    const { result } = renderHook(
      () => useSwitchController({ ...defaultProps, defaultChecked: true }),
      { wrapper },
    );

    const mockEvent = {
      key: 'Tab',
      preventDefault: vi.fn(),
    } as unknown as KeyboardEvent<HTMLDivElement>;

    act(() => {
      result.current.handleKeyDown(mockEvent);
    });

    expect(mockEvent.preventDefault).not.toHaveBeenCalled();
    expect(result.current.checked).toBe(true); // unchanged
  });

  it('toggles correctly from true to false', () => {
    const wrapper = createWrapper(defaultContext);

    const { result } = renderHook(
      () => useSwitchController({ ...defaultProps, defaultChecked: true }),
      { wrapper },
    );

    expect(result.current.checked).toBe(true);

    act(() => {
      result.current.handleChange(false);
    });

    expect(result.current.checked).toBe(false);
  });

  it('maintains correct state through multiple toggles', () => {
    const onChangeFormInput = vi.fn();
    const context: FormContextProps = {
      ...defaultContext,
      onChangeFormInput,
    };
    const wrapper = createWrapper(context);

    const { result } = renderHook(() => useSwitchController(defaultProps), { wrapper });

    expect(result.current.checked).toBe(false);

    // First toggle
    act(() => {
      result.current.handleChange(true);
    });
    expect(result.current.checked).toBe(true);
    expect(onChangeFormInput).toHaveBeenCalledWith({
      name: 'testSwitch',
      value: true,
    });

    // Second toggle
    act(() => {
      result.current.handleChange(false);
    });
    expect(result.current.checked).toBe(false);
    expect(onChangeFormInput).toHaveBeenCalledWith({
      name: 'testSwitch',
      value: false,
    });

    // Third toggle
    act(() => {
      result.current.handleChange(true);
    });
    expect(result.current.checked).toBe(true);
    expect(onChangeFormInput).toHaveBeenCalledWith({
      name: 'testSwitch',
      value: true,
    });
  });

  it('works with different switch names', () => {
    const onChangeFormInput = vi.fn();
    const context: FormContextProps = {
      ...defaultContext,
      onChangeFormInput,
    };
    const wrapper = createWrapper(context);

    const { result } = renderHook(
      () => useSwitchController({ name: 'differentSwitch', defaultChecked: false }),
      { wrapper },
    );

    act(() => {
      result.current.handleChange(true);
    });

    expect(onChangeFormInput).toHaveBeenCalledWith({
      name: 'differentSwitch',
      value: true,
    });
  });

  it('handles keyboard events correctly when toggling', () => {
    const onChange = vi.fn();
    const wrapper = createWrapper(defaultContext);

    const { result } = renderHook(() => useSwitchController({ ...defaultProps, onChange }), {
      wrapper,
    });

    const spaceEvent = {
      key: ' ',
      preventDefault: vi.fn(),
    } as unknown as KeyboardEvent<HTMLDivElement>;

    // Toggle with Space
    act(() => {
      result.current.handleKeyDown(spaceEvent);
    });
    expect(result.current.checked).toBe(true);
    expect(onChange).toHaveBeenCalledWith(true);

    const enterEvent = {
      key: 'Enter',
      preventDefault: vi.fn(),
    } as unknown as KeyboardEvent<HTMLDivElement>;

    // Toggle back with Enter
    act(() => {
      result.current.handleKeyDown(enterEvent);
    });
    expect(result.current.checked).toBe(false);
    expect(onChange).toHaveBeenCalledWith(false);
  });

  it('initializes with false when no defaultChecked or initialValues', () => {
    const wrapper = createWrapper(defaultContext);

    const { result } = renderHook(() => useSwitchController({ name: 'testSwitch' }), { wrapper });

    expect(result.current.checked).toBe(false);
  });
});
