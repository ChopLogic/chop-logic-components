import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useSearchController } from '../Search.controller';

describe('useSearchController', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('initial state', () => {
    it('should initialize with empty search value', () => {
      const { result } = renderHook(() =>
        useSearchController({
          onSearch: vi.fn(),
          searchMode: 'automatic',
          debounceDelay: 500,
        }),
      );

      expect(result.current.searchValue).toBe('');
    });

    it('should set isSearchButtonVisible to false in automatic mode', () => {
      const { result } = renderHook(() =>
        useSearchController({
          onSearch: vi.fn(),
          searchMode: 'automatic',
          debounceDelay: 500,
        }),
      );

      expect(result.current.isSearchButtonVisible).toBe(false);
    });

    it('should set isSearchButtonVisible to true in manual mode', () => {
      const { result } = renderHook(() =>
        useSearchController({
          onSearch: vi.fn(),
          searchMode: 'manual',
          debounceDelay: 500,
        }),
      );

      expect(result.current.isSearchButtonVisible).toBe(true);
    });

    it('should set isLabelIconVisible to true in automatic mode', () => {
      const { result } = renderHook(() =>
        useSearchController({
          onSearch: vi.fn(),
          searchMode: 'automatic',
          debounceDelay: 500,
        }),
      );

      expect(result.current.isLabelIconVisible).toBe(true);
    });

    it('should set isLabelIconVisible to false in manual mode', () => {
      const { result } = renderHook(() =>
        useSearchController({
          onSearch: vi.fn(),
          searchMode: 'manual',
          debounceDelay: 500,
        }),
      );

      expect(result.current.isLabelIconVisible).toBe(false);
    });

    it('should initialize isClearButtonVisible to false', () => {
      const { result } = renderHook(() =>
        useSearchController({
          onSearch: vi.fn(),
          searchMode: 'automatic',
          debounceDelay: 500,
        }),
      );

      expect(result.current.isClearButtonVisible).toBe(false);
    });

    it('should initialize isSearchValueValid to false', () => {
      const { result } = renderHook(() =>
        useSearchController({
          onSearch: vi.fn(),
          searchMode: 'automatic',
          minLength: 1,
          maxLength: 50,
          debounceDelay: 500,
        }),
      );

      expect(result.current.isSearchValueValid).toBe(false);
    });
  });

  describe('handleChange', () => {
    it('should update searchValue on input change', () => {
      const { result } = renderHook(() =>
        useSearchController({
          onSearch: vi.fn(),
          searchMode: 'automatic',
          debounceDelay: 500,
        }),
      );

      const event = {
        target: { value: 'test' },
      } as React.ChangeEvent<HTMLInputElement>;

      act(() => {
        result.current.handleChange(event);
      });

      expect(result.current.searchValue).toBe('test');
    });

    it('should update isClearButtonVisible when search value is entered', () => {
      const { result } = renderHook(() =>
        useSearchController({
          onSearch: vi.fn(),
          searchMode: 'automatic',
          debounceDelay: 500,
        }),
      );

      expect(result.current.isClearButtonVisible).toBe(false);

      const event = {
        target: { value: 'test' },
      } as React.ChangeEvent<HTMLInputElement>;

      act(() => {
        result.current.handleChange(event);
      });

      expect(result.current.isClearButtonVisible).toBe(true);
    });

    it('should update isSearchValueValid based on minLength and maxLength', () => {
      const { result } = renderHook(() =>
        useSearchController({
          onSearch: vi.fn(),
          searchMode: 'automatic',
          minLength: 2,
          maxLength: 5,
          debounceDelay: 500,
        }),
      );

      // Value too short
      let event = {
        target: { value: 'a' },
      } as React.ChangeEvent<HTMLInputElement>;

      act(() => {
        result.current.handleChange(event);
      });

      expect(result.current.isSearchValueValid).toBe(false);

      // Value valid length
      event = {
        target: { value: 'abc' },
      } as React.ChangeEvent<HTMLInputElement>;

      act(() => {
        result.current.handleChange(event);
      });

      expect(result.current.isSearchValueValid).toBe(true);

      // Value too long
      event = {
        target: { value: 'abcdef' },
      } as React.ChangeEvent<HTMLInputElement>;

      act(() => {
        result.current.handleChange(event);
      });

      expect(result.current.isSearchValueValid).toBe(false);
    });

    it('should invalidate if search value is only whitespace', () => {
      const { result } = renderHook(() =>
        useSearchController({
          onSearch: vi.fn(),
          searchMode: 'automatic',
          minLength: 1,
          maxLength: 50,
          debounceDelay: 500,
        }),
      );

      const event = {
        target: { value: '   ' },
      } as React.ChangeEvent<HTMLInputElement>;

      act(() => {
        result.current.handleChange(event);
      });

      expect(result.current.isSearchValueValid).toBe(false);
    });
  });

  describe('handleClear', () => {
    it('should clear search value', () => {
      const { result } = renderHook(() =>
        useSearchController({
          onSearch: vi.fn(),
          searchMode: 'automatic',
          debounceDelay: 500,
        }),
      );

      // Set a value first
      act(() => {
        result.current.handleChange({
          target: { value: 'test' },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.searchValue).toBe('test');

      // Clear
      act(() => {
        result.current.handleClear();
      });

      expect(result.current.searchValue).toBe('');
    });

    it('should call onClear callback when provided', () => {
      const onClear = vi.fn();
      const { result } = renderHook(() =>
        useSearchController({
          onSearch: vi.fn(),
          onClear,
          searchMode: 'automatic',
          debounceDelay: 500,
        }),
      );

      act(() => {
        result.current.handleClear();
      });

      expect(onClear).toHaveBeenCalledOnce();
    });

    it('should not throw error if onClear is not provided', () => {
      const { result } = renderHook(() =>
        useSearchController({
          onSearch: vi.fn(),
          searchMode: 'automatic',
          debounceDelay: 500,
        }),
      );

      expect(() => {
        act(() => {
          result.current.handleClear();
        });
      }).not.toThrow();
    });
  });

  describe('handleSearchClick', () => {
    it('should call onSearch with current search value in manual mode', () => {
      const onSearch = vi.fn();
      const { result } = renderHook(() =>
        useSearchController({
          onSearch,
          searchMode: 'manual',
          debounceDelay: 500,
        }),
      );

      // Set a search value
      act(() => {
        result.current.handleChange({
          target: { value: 'test search' },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      // Click search button
      act(() => {
        result.current.handleSearchClick();
      });

      expect(onSearch).toHaveBeenCalledWith('test search');
    });

    it('should not call onSearch if callback is not provided', () => {
      const { result } = renderHook(() =>
        useSearchController({
          searchMode: 'manual',
          debounceDelay: 500,
        }),
      );

      act(() => {
        result.current.handleChange({
          target: { value: 'test' },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(() => {
        act(() => {
          result.current.handleSearchClick();
        });
      }).not.toThrow();
    });
  });

  describe('automatic search with debounce', () => {
    it('should trigger onSearch after debounce delay in automatic mode', () => {
      const onSearch = vi.fn();
      const { result } = renderHook(() =>
        useSearchController({
          onSearch,
          searchMode: 'automatic',
          minLength: 1,
          maxLength: 50,
          debounceDelay: 500,
        }),
      );

      act(() => {
        result.current.handleChange({
          target: { value: 'test search' },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      // Should not call onSearch immediately
      expect(onSearch).not.toHaveBeenCalled();

      // Fast-forward time to trigger debounce
      act(() => {
        vi.advanceTimersByTime(500);
      });

      expect(onSearch).toHaveBeenCalledWith('test search');
      expect(onSearch).toHaveBeenCalledOnce();
    });

    it('should not trigger search if value is invalid during debounce', () => {
      const onSearch = vi.fn();
      const { result } = renderHook(() =>
        useSearchController({
          onSearch,
          searchMode: 'automatic',
          minLength: 3,
          maxLength: 50,
          debounceDelay: 500,
        }),
      );

      act(() => {
        result.current.handleChange({
          target: { value: 'ab' },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      act(() => {
        vi.advanceTimersByTime(500);
      });

      expect(onSearch).not.toHaveBeenCalled();
    });

    it('should not trigger search if value is only whitespace', () => {
      const onSearch = vi.fn();
      const { result } = renderHook(() =>
        useSearchController({
          onSearch,
          searchMode: 'automatic',
          minLength: 1,
          maxLength: 50,
          debounceDelay: 500,
        }),
      );

      act(() => {
        result.current.handleChange({
          target: { value: '   ' },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      act(() => {
        vi.advanceTimersByTime(500);
      });

      expect(onSearch).not.toHaveBeenCalled();
    });

    it('should cancel previous debounce when value changes', () => {
      const onSearch = vi.fn();
      const { result } = renderHook(() =>
        useSearchController({
          onSearch,
          searchMode: 'automatic',
          minLength: 1,
          maxLength: 50,
          debounceDelay: 500,
        }),
      );

      act(() => {
        result.current.handleChange({
          target: { value: 'first' },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      // Advance time partway
      act(() => {
        vi.advanceTimersByTime(300);
      });

      // Change value before debounce completes
      act(() => {
        result.current.handleChange({
          target: { value: 'second' },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      // Complete the remaining debounce time
      act(() => {
        vi.advanceTimersByTime(200);
      });

      // Should not have called onSearch yet
      expect(onSearch).not.toHaveBeenCalled();

      // Advance to complete the new debounce
      act(() => {
        vi.advanceTimersByTime(300);
      });

      expect(onSearch).toHaveBeenCalledWith('second');
      expect(onSearch).toHaveBeenCalledOnce();
    });

    it('should not trigger search in manual mode during debounce', () => {
      const onSearch = vi.fn();
      const { result } = renderHook(() =>
        useSearchController({
          onSearch,
          searchMode: 'manual',
          minLength: 1,
          maxLength: 50,
          debounceDelay: 500,
        }),
      );

      act(() => {
        result.current.handleChange({
          target: { value: 'test' },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      act(() => {
        vi.advanceTimersByTime(500);
      });

      // Should not trigger automatic search in manual mode
      expect(onSearch).not.toHaveBeenCalled();
    });
  });

  describe('handleKeyDown', () => {
    it('should trigger search on Enter key press', () => {
      const onSearch = vi.fn();
      const { result } = renderHook(() =>
        useSearchController({
          onSearch,
          searchMode: 'automatic',
          debounceDelay: 500,
        }),
      );

      act(() => {
        result.current.handleChange({
          target: { value: 'test' },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      const event = {
        key: 'Enter',
        preventDefault: vi.fn(),
      } as unknown as React.KeyboardEvent<HTMLInputElement>;

      act(() => {
        result.current.handleKeyDown(event);
      });

      expect(onSearch).toHaveBeenCalledWith('test');
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should clear search on Escape key press', () => {
      const onSearch = vi.fn();
      const onClear = vi.fn();
      const { result } = renderHook(() =>
        useSearchController({
          onSearch,
          onClear,
          searchMode: 'automatic',
          debounceDelay: 500,
        }),
      );

      act(() => {
        result.current.handleChange({
          target: { value: 'test' },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.searchValue).toBe('test');

      const event = {
        key: 'Escape',
        preventDefault: vi.fn(),
      } as unknown as React.KeyboardEvent<HTMLInputElement>;

      act(() => {
        result.current.handleKeyDown(event);
      });

      expect(result.current.searchValue).toBe('');
      expect(onClear).toHaveBeenCalled();
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should not prevent default for other keys', () => {
      const onSearch = vi.fn();
      const { result } = renderHook(() =>
        useSearchController({
          onSearch,
          searchMode: 'automatic',
          debounceDelay: 500,
        }),
      );

      const event = {
        key: 'a',
        preventDefault: vi.fn(),
      } as unknown as React.KeyboardEvent<HTMLInputElement>;

      act(() => {
        result.current.handleKeyDown(event);
      });

      expect(event.preventDefault).not.toHaveBeenCalled();
    });
  });

  describe('validation constraints', () => {
    it('should validate minLength constraint', () => {
      const { result } = renderHook(() =>
        useSearchController({
          onSearch: vi.fn(),
          searchMode: 'automatic',
          minLength: 5,
          debounceDelay: 500,
        }),
      );

      act(() => {
        result.current.handleChange({
          target: { value: 'test' },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.isSearchValueValid).toBe(false);

      act(() => {
        result.current.handleChange({
          target: { value: 'testing' },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.isSearchValueValid).toBe(true);
    });

    it('should validate maxLength constraint', () => {
      const { result } = renderHook(() =>
        useSearchController({
          onSearch: vi.fn(),
          searchMode: 'automatic',
          maxLength: 5,
          debounceDelay: 500,
        }),
      );

      act(() => {
        result.current.handleChange({
          target: { value: 'test' },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.isSearchValueValid).toBe(true);

      act(() => {
        result.current.handleChange({
          target: { value: 'testing' },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.isSearchValueValid).toBe(false);
    });

    it('should use default minLength of 1', () => {
      const { result } = renderHook(() =>
        useSearchController({
          onSearch: vi.fn(),
          searchMode: 'automatic',
          debounceDelay: 500,
        }),
      );

      act(() => {
        result.current.handleChange({
          target: { value: 'a' },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.isSearchValueValid).toBe(true);
    });

    it('should use default maxLength of 50', () => {
      const { result } = renderHook(() =>
        useSearchController({
          onSearch: vi.fn(),
          searchMode: 'automatic',
          debounceDelay: 500,
        }),
      );

      const value = 'a'.repeat(50);

      act(() => {
        result.current.handleChange({
          target: { value },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.isSearchValueValid).toBe(true);

      act(() => {
        const updatedValue = `${value} a`;
        result.current.handleChange({
          target: { value: updatedValue },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.isSearchValueValid).toBe(false);
    });
  });

  describe('debounce delay configuration', () => {
    it('should respect custom debounce delay', () => {
      const onSearch = vi.fn();
      const { result } = renderHook(() =>
        useSearchController({
          onSearch,
          searchMode: 'automatic',
          minLength: 1,
          maxLength: 50,
          debounceDelay: 1000,
        }),
      );

      act(() => {
        result.current.handleChange({
          target: { value: 'test' },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      // Should not call after 500ms
      act(() => {
        vi.advanceTimersByTime(500);
      });

      expect(onSearch).not.toHaveBeenCalled();

      // Should call after 1000ms
      act(() => {
        vi.advanceTimersByTime(500);
      });

      expect(onSearch).toHaveBeenCalledWith('test');
    });

    it('should use default debounce delay of 500', () => {
      const onSearch = vi.fn();
      const { result } = renderHook(() =>
        useSearchController({
          onSearch,
          searchMode: 'automatic',
          minLength: 1,
          maxLength: 50,
        }),
      );

      act(() => {
        result.current.handleChange({
          target: { value: 'test' },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      act(() => {
        vi.advanceTimersByTime(500);
      });

      expect(onSearch).toHaveBeenCalledWith('test');
    });
  });
});
