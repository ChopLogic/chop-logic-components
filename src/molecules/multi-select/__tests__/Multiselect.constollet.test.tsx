import { FormContext } from '@contexts';
import type { FormContextProps, MultiSelectValue, SelectValue } from '@models';
import { act, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useMultiSelectController } from '../MultiSelect.controller';

// Mock the dependencies
vi.mock('./MultiSelect.helpers', () => ({
  getMultiSelectInitialValues: vi.fn(({ name, initialValues, defaultValue }) => {
    if (initialValues && name in initialValues) {
      return initialValues[name] || [];
    }
    if (defaultValue) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    }
    return [];
  }),
  getMultiSelectUpdatedValues: vi.fn((values, id) => {
    const existingIndex = values.findIndex((v: MultiSelectValue) => v.id === id);
    if (existingIndex >= 0) {
      return values.filter((v: MultiSelectValue) => v.id !== id);
    }
    return [...values, { id, label: `Label ${id}` }];
  }),
  getMultiSelectFormValues: vi.fn((values: MultiSelectValue[]) => values.map((v) => v.id)),
}));

// Test wrapper component
const createWrapper = (contextValue: FormContextProps) => {
  return ({ children }: { children: React.ReactNode }) => (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};

describe('useMultiSelectController', () => {
  const defaultContext: FormContextProps = {
    onChangeFormInput: vi.fn(),
    initialValues: {},
    resetSignal: 0,
  };

  const mockOptions: SelectValue[] = [
    { id: '1', label: 'Option 1', selected: false },
    { id: '2', label: 'Option 2', selected: false },
    { id: '3', label: 'Option 3', selected: false },
  ];

  const defaultProps = {
    name: 'testSelect',
    options: mockOptions,
    onChange: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('initializes defaults values', () => {
    const wrapper = createWrapper(defaultContext);

    const { result } = renderHook(() => useMultiSelectController(defaultProps), { wrapper });

    expect(result.current.values).toEqual(defaultProps.options);
    expect(result.current.opened).toBe(false);
  });

  it('selects an initialValue from context when provided', () => {
    const contextWithValues: FormContextProps = {
      ...defaultContext,
      initialValues: { testSelect: [{ id: '2', label: 'Option 2', selected: true }] },
    };
    const wrapper = createWrapper(contextWithValues);

    const { result } = renderHook(() => useMultiSelectController(defaultProps), { wrapper });

    expect(result.current.values).toEqual([
      {
        id: '1',
        label: 'Option 1',
        selected: false,
      },
      {
        id: '2',
        label: 'Option 2',
        selected: true,
      },
      {
        id: '3',
        label: 'Option 3',
        selected: false,
      },
    ]);
  });

  it('toggles opened state correctly', () => {
    const wrapper = createWrapper(defaultContext);

    const { result } = renderHook(() => useMultiSelectController(defaultProps), { wrapper });

    expect(result.current.opened).toBe(false);

    // Open
    act(() => {
      result.current.handleToggle();
    });
    expect(result.current.opened).toBe(true);

    // Close via handleClose
    act(() => {
      result.current.handleClose();
    });
    expect(result.current.opened).toBe(false);

    // Toggle back open
    act(() => {
      result.current.handleToggle();
    });
    expect(result.current.opened).toBe(true);

    // Toggle closed
    act(() => {
      result.current.handleToggle();
    });
    expect(result.current.opened).toBe(false);
  });

  it('handles handleSelect without onChangeFormInput', () => {
    const onChange = vi.fn();
    const context: FormContextProps = {
      ...defaultContext,
      onChangeFormInput: undefined,
    };
    const wrapper = createWrapper(context);

    const { result } = renderHook(() => useMultiSelectController({ ...defaultProps, onChange }), {
      wrapper,
    });

    act(() => {
      result.current.handleSelect('1');
    });

    const expectedValues: MultiSelectValue[] = [
      {
        id: '1',
        label: 'Option 1',
        selected: true,
      },
      {
        id: '2',
        label: 'Option 2',
        selected: false,
      },
      {
        id: '3',
        label: 'Option 3',
        selected: false,
      },
    ];

    expect(result.current.values).toEqual(expectedValues);
    expect(onChange).toHaveBeenCalledWith(expectedValues);
  });

  it('handles handleSelect without onChange callback', () => {
    const onChangeFormInput = vi.fn();
    const context: FormContextProps = {
      ...defaultContext,
      onChangeFormInput,
    };
    const wrapper = createWrapper(context);

    const { result } = renderHook(
      () => useMultiSelectController({ name: 'testSelect', options: mockOptions }),
      { wrapper },
    );

    act(() => {
      result.current.handleSelect('1');
    });

    const expectedValues: MultiSelectValue[] = [
      {
        id: '1',
        label: 'Option 1',
        selected: true,
      },
      {
        id: '2',
        label: 'Option 2',
        selected: false,
      },
      {
        id: '3',
        label: 'Option 3',
        selected: false,
      },
    ];

    expect(result.current.values).toEqual(expectedValues);
    expect(onChangeFormInput).toHaveBeenCalledWith({
      name: 'testSelect',
      value: ['1'],
    });
  });

  it('handles multiple selection', () => {
    const onChangeFormInput = vi.fn();
    const context: FormContextProps = {
      ...defaultContext,
      onChangeFormInput,
    };
    const wrapper = createWrapper(context);

    const { result } = renderHook(() => useMultiSelectController(defaultProps), { wrapper });

    // Add some values
    act(() => {
      result.current.handleSelect('1');
    });
    act(() => {
      result.current.handleSelect('2');
    });

    const expectedValues: MultiSelectValue[] = [
      {
        id: '1',
        label: 'Option 1',
        selected: true,
      },
      {
        id: '2',
        label: 'Option 2',
        selected: true,
      },
      {
        id: '3',
        label: 'Option 3',
        selected: false,
      },
    ];

    expect(result.current.values).toEqual(expectedValues);
  });
});
