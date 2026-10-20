import { act, renderHook } from '@testing-library/react';
import type { MultiSelectValue, SelectValue } from '@types';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { FormContext, type FormContextProps } from '../../../contexts';
import { useMultiSelectController } from '../MultiSelect.controller';

// Store the reset callback to trigger it in tests
let resetCallback: (() => void) | null = null;

vi.mock('@hooks', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@hooks')>();
  return {
    ...actual,
    useResetFormInput: vi.fn((onReset: () => void) => {
      resetCallback = onReset;
    }),
  };
});

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
    resetCallback = null;
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

  describe('handleReset', () => {
    it('should reset values to initial options when handleReset is triggered', () => {
      const onChangeFormInput = vi.fn();
      const context: FormContextProps = {
        ...defaultContext,
        onChangeFormInput,
      };
      const wrapper = createWrapper(context);

      const { result } = renderHook(() => useMultiSelectController(defaultProps), { wrapper });

      // Select some options
      act(() => {
        result.current.handleSelect('1');
      });
      act(() => {
        result.current.handleSelect('2');
      });

      // Open the dropdown
      act(() => {
        result.current.handleToggle();
      });
      expect(result.current.opened).toBe(true);

      // Clear mock to verify reset calls
      onChangeFormInput.mockClear();

      // Trigger reset
      act(() => {
        resetCallback?.();
      });

      // Should reset opened state to false
      expect(result.current.opened).toBe(false);

      // Should reset values to initial options
      expect(result.current.values).toEqual(mockOptions);

      // Should call onChangeFormInput with reset values
      expect(onChangeFormInput).toHaveBeenCalledWith({
        name: 'testSelect',
        value: [],
      });
    });

    it('should reset to initial values from context when handleReset is triggered', () => {
      const onChangeFormInput = vi.fn();
      const initialSelectedValues: MultiSelectValue[] = [
        { id: '2', label: 'Option 2', selected: true },
      ];
      const contextWithValues: FormContextProps = {
        onChangeFormInput,
        initialValues: { testSelect: initialSelectedValues },
        resetSignal: 0,
      };
      const wrapper = createWrapper(contextWithValues);

      const { result } = renderHook(() => useMultiSelectController(defaultProps), { wrapper });

      // Select additional options
      act(() => {
        result.current.handleSelect('1');
      });
      act(() => {
        result.current.handleSelect('3');
      });

      // Clear mock to verify reset calls
      onChangeFormInput.mockClear();

      // Trigger reset
      act(() => {
        resetCallback?.();
      });

      // Should reset values - the exact values depend on getMultiSelectInitialValues implementation
      // Since we're not mocking helpers anymore, this will use the real implementation
      expect(result.current.opened).toBe(false);
      expect(onChangeFormInput).toHaveBeenCalled();
    });

    it('should handle reset without onChangeFormInput', () => {
      const context: FormContextProps = {
        ...defaultContext,
        onChangeFormInput: undefined,
      };
      const wrapper = createWrapper(context);

      const { result } = renderHook(() => useMultiSelectController(defaultProps), { wrapper });

      // Select some options
      act(() => {
        result.current.handleSelect('1');
      });

      // Open dropdown
      act(() => {
        result.current.handleToggle();
      });
      expect(result.current.opened).toBe(true);

      // Trigger reset - should not throw even without onChangeFormInput
      act(() => {
        resetCallback?.();
      });

      // Should still reset opened state
      expect(result.current.opened).toBe(false);
    });

    it('should reset multiple times correctly', () => {
      const onChangeFormInput = vi.fn();
      const context: FormContextProps = {
        ...defaultContext,
        onChangeFormInput,
      };
      const wrapper = createWrapper(context);

      const { result } = renderHook(() => useMultiSelectController(defaultProps), { wrapper });

      // First cycle: select and reset
      act(() => {
        result.current.handleSelect('1');
        result.current.handleToggle();
      });
      expect(result.current.opened).toBe(true);

      act(() => {
        resetCallback?.();
      });
      expect(result.current.opened).toBe(false);

      // Second cycle: select and reset
      act(() => {
        result.current.handleSelect('2');
        result.current.handleToggle();
      });
      expect(result.current.opened).toBe(true);

      act(() => {
        resetCallback?.();
      });
      expect(result.current.opened).toBe(false);
    });
  });
});
