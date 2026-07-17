import { act, renderHook, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useFormController } from '../Form.controller';

describe('useFormController', () => {
  describe('controlled flow (onSubmit)', () => {
    it('should return isPending as false initially', () => {
      const { result } = renderHook(() => useFormController({ onSubmit: vi.fn() }));
      expect(result.current.isPending).toBe(false);
    });

    it('should set isPending to true during async onSubmit and false after', async () => {
      let resolveSubmit: () => void = () => {};
      const asyncSubmit = vi.fn(
        () =>
          new Promise<void>((resolve) => {
            resolveSubmit = resolve;
          }),
      );

      const { result } = renderHook(() => useFormController({ onSubmit: asyncSubmit }));

      // Simulate a form submit event with proper FormData mock
      const mockFormData = new Map<string, string>();
      vi.stubGlobal(
        'FormData',
        class {
          [Symbol.iterator]() {
            return mockFormData.entries();
          }
          entries() {
            return mockFormData.entries();
          }
        },
      );

      const fakeEvent = {
        preventDefault: vi.fn(),
        target: document.createElement('form'),
      } as unknown as React.SubmitEvent<HTMLFormElement>;

      await act(async () => {
        result.current.handleSubmit?.(fakeEvent);
      });

      expect(result.current.isPending).toBe(true);

      await act(async () => {
        resolveSubmit();
      });

      await waitFor(() => {
        expect(result.current.isPending).toBe(false);
      });

      vi.unstubAllGlobals();
    });

    it('should return valid as true when no initialValues are provided', () => {
      const { result } = renderHook(() => useFormController({ onSubmit: vi.fn() }));
      expect(result.current.valid).toBe(true);
    });

    it('should track validation state via handleInputChange', () => {
      const { result } = renderHook(() =>
        useFormController({
          initialValues: { name: '' },
          onSubmit: vi.fn(),
        }),
      );

      act(() => {
        result.current.handleInputChange({ name: 'name', value: 'test', valid: false });
      });

      expect(result.current.valid).toBe(false);
    });

    it('should not call onSubmit when valid is false', async () => {
      const mockSubmit = vi.fn();
      const { result } = renderHook(() =>
        useFormController({
          initialValues: { name: '' },
          onSubmit: mockSubmit,
        }),
      );

      // Mark field as invalid
      act(() => {
        result.current.handleInputChange({ name: 'name', value: '', valid: false });
      });

      const mockFormData = new Map<string, string>();
      vi.stubGlobal(
        'FormData',
        class {
          [Symbol.iterator]() {
            return mockFormData.entries();
          }
          entries() {
            return mockFormData.entries();
          }
        },
      );

      const fakeEvent = {
        preventDefault: vi.fn(),
        target: document.createElement('form'),
      } as unknown as React.SubmitEvent<HTMLFormElement>;

      await act(async () => {
        result.current.handleSubmit?.(fakeEvent);
      });

      expect(mockSubmit).not.toHaveBeenCalled();
      vi.unstubAllGlobals();
    });

    it('should reset form data and increment resetSignal when resetOnSuccess is true', async () => {
      const initialValues = { name: 'initial' };
      const mockSubmit = vi.fn(() => Promise.resolve());

      const { result } = renderHook(() =>
        useFormController({
          initialValues,
          resetOnSuccess: true,
          onSubmit: mockSubmit,
        }),
      );

      const initialResetSignal = result.current.resetSignal;

      const mockFormData = new Map<string, string>();
      vi.stubGlobal(
        'FormData',
        class {
          [Symbol.iterator]() {
            return mockFormData.entries();
          }
          entries() {
            return mockFormData.entries();
          }
        },
      );

      const fakeEvent = {
        preventDefault: vi.fn(),
        target: document.createElement('form'),
      } as unknown as React.SubmitEvent<HTMLFormElement>;

      await act(async () => {
        result.current.handleSubmit?.(fakeEvent);
      });

      await waitFor(() => {
        expect(result.current.resetSignal).toBe(initialResetSignal + 1);
      });

      vi.unstubAllGlobals();
    });
  });

  describe('action flow', () => {
    it('should return formAction when action prop is provided', () => {
      // biome-ignore lint/suspicious/noConfusingVoidType: matches FormProps<void> default generic
      const mockAction = vi.fn(async (_prev: void, _fd: FormData) => {});

      const { result } = renderHook(() => useFormController({ action: mockAction }));

      expect(result.current.formAction).toBeDefined();
      expect(result.current.handleSubmit).toBeUndefined();
    });

    it('should return handleSubmit when onSubmit prop is provided (no action)', () => {
      const { result } = renderHook(() => useFormController({ onSubmit: vi.fn() }));

      expect(result.current.handleSubmit).toBeDefined();
      expect(result.current.formAction).toBeUndefined();
    });

    it('should return isPending as false initially in action flow', () => {
      // biome-ignore lint/suspicious/noConfusingVoidType: matches FormProps<void> default generic
      const mockAction = vi.fn(async (_prev: void, _fd: FormData) => {});

      const { result } = renderHook(() => useFormController({ action: mockAction }));

      expect(result.current.isPending).toBe(false);
    });

    it('should call onActionComplete with action result when action resolves', async () => {
      const mockOnActionComplete = vi.fn();
      const mockAction = vi.fn(async (_prev: string, _fd: FormData) => 'action-result');

      const { result } = renderHook(() =>
        useFormController({
          action: mockAction,
          actionInitialState: '',
          onActionComplete: mockOnActionComplete,
        }),
      );

      const formData = new FormData();

      await act(async () => {
        result.current.formAction?.(formData);
      });

      await waitFor(() => {
        expect(mockOnActionComplete).toHaveBeenCalledWith('action-result');
      });
    });

    it('should trigger reset after successful action when resetOnSuccess is true', async () => {
      const initialValues = { name: 'initial' };
      const mockAction = vi.fn(async (_prev: string, _fd: FormData) => 'done');

      const { result } = renderHook(() =>
        useFormController({
          action: mockAction,
          actionInitialState: '',
          initialValues,
          resetOnSuccess: true,
        }),
      );

      const initialResetSignal = result.current.resetSignal;
      const formData = new FormData();

      await act(async () => {
        result.current.formAction?.(formData);
      });

      await waitFor(() => {
        expect(result.current.resetSignal).toBe(initialResetSignal + 1);
      });
    });

    it('should not trigger reset after action when resetOnSuccess is false', async () => {
      const mockAction = vi.fn(async (_prev: string, _fd: FormData) => 'done');

      const { result } = renderHook(() =>
        useFormController({
          action: mockAction,
          actionInitialState: '',
          resetOnSuccess: false,
        }),
      );

      const initialResetSignal = result.current.resetSignal;
      const formData = new FormData();

      await act(async () => {
        result.current.formAction?.(formData);
      });

      await waitFor(() => {
        expect(mockAction).toHaveBeenCalled();
      });

      expect(result.current.resetSignal).toBe(initialResetSignal);
    });

    it('should not call onActionComplete when it is not provided', async () => {
      const mockAction = vi.fn(async (_prev: string, _fd: FormData) => 'result');

      const { result } = renderHook(() =>
        useFormController({
          action: mockAction,
          actionInitialState: '',
        }),
      );

      const formData = new FormData();

      await act(async () => {
        result.current.formAction?.(formData);
      });

      await waitFor(() => {
        expect(mockAction).toHaveBeenCalled();
      });
    });

    it('should track validation state correctly in action flow', () => {
      const mockAction = vi.fn(async (_prev: string, _fd: FormData) => 'done');

      const { result } = renderHook(() =>
        useFormController({
          action: mockAction,
          actionInitialState: '',
          initialValues: { email: '' },
        }),
      );

      expect(result.current.valid).toBe(true);

      act(() => {
        result.current.handleInputChange({ name: 'email', value: 'bad', valid: false });
      });

      expect(result.current.valid).toBe(false);

      act(() => {
        result.current.handleInputChange({ name: 'email', value: 'good@test.com', valid: true });
      });

      expect(result.current.valid).toBe(true);
    });
  });

  describe('handleReset', () => {
    it('should increment resetSignal on manual reset', () => {
      const { result } = renderHook(() => useFormController({ onSubmit: vi.fn() }));

      const initialSignal = result.current.resetSignal;

      const fakeEvent = {} as React.SubmitEvent<HTMLFormElement>;
      act(() => {
        result.current.handleReset(fakeEvent);
      });

      expect(result.current.resetSignal).toBe(initialSignal + 1);
    });

    it('should call onReset callback on manual reset', () => {
      const mockReset = vi.fn();
      const { result } = renderHook(() =>
        useFormController({ onSubmit: vi.fn(), onReset: mockReset }),
      );

      const fakeEvent = {} as React.SubmitEvent<HTMLFormElement>;
      act(() => {
        result.current.handleReset(fakeEvent);
      });

      expect(mockReset).toHaveBeenCalledWith(fakeEvent);
    });

    it('should reset validation state to initial on manual reset', () => {
      const { result } = renderHook(() =>
        useFormController({
          initialValues: { name: '', email: '' },
          onSubmit: vi.fn(),
        }),
      );

      // Mark fields as invalid
      act(() => {
        result.current.handleInputChange({ name: 'name', value: '', valid: false });
        result.current.handleInputChange({ name: 'email', value: '', valid: false });
      });

      expect(result.current.valid).toBe(false);

      const fakeEvent = {} as React.SubmitEvent<HTMLFormElement>;
      act(() => {
        result.current.handleReset(fakeEvent);
      });

      expect(result.current.valid).toBe(true);
    });

    it('should work without onReset callback', () => {
      const { result } = renderHook(() => useFormController({ onSubmit: vi.fn() }));

      const fakeEvent = {} as React.SubmitEvent<HTMLFormElement>;
      act(() => {
        result.current.handleReset(fakeEvent);
      });

      // Should not throw and should still increment resetSignal
      expect(result.current.resetSignal).toBe(1);
    });
  });

  describe('handleInputChange edge cases', () => {
    it('should update formData correctly when multiple fields change', () => {
      const mockSubmit = vi.fn();
      const { result } = renderHook(() =>
        useFormController({
          initialValues: { name: 'a', email: 'b' },
          onSubmit: mockSubmit,
        }),
      );

      act(() => {
        result.current.handleInputChange({ name: 'name', value: 'Alice', valid: true });
      });

      act(() => {
        result.current.handleInputChange({ name: 'email', value: 'alice@test.com', valid: true });
      });

      expect(result.current.valid).toBe(true);
    });

    it('should handle input change when valid property is undefined (no validation update)', () => {
      const { result } = renderHook(() =>
        useFormController({
          initialValues: { name: '' },
          onSubmit: vi.fn(),
        }),
      );

      // Initially valid is true (all fields default to valid)
      expect(result.current.valid).toBe(true);

      // Change without valid property should not change validation state
      act(() => {
        result.current.handleInputChange({ name: 'name', value: 'test' });
      });

      expect(result.current.valid).toBe(true);
    });

    it('should handle input change for field not in initialValues', () => {
      const { result } = renderHook(() =>
        useFormController({
          initialValues: { name: '' },
          onSubmit: vi.fn(),
        }),
      );

      // Change a field not in initialValues
      act(() => {
        result.current.handleInputChange({ name: 'unknown', value: 'value', valid: true });
      });

      // Should still be valid since the unknown field is not in the validation state
      expect(result.current.valid).toBe(true);
    });
  });

  describe('controlled flow edge cases', () => {
    it('should not call onSubmit when onSubmit is not provided', async () => {
      const { result } = renderHook(() => useFormController({}));

      const fakeEvent = {
        preventDefault: vi.fn(),
        target: document.createElement('form'),
      } as unknown as React.SubmitEvent<HTMLFormElement>;

      await act(async () => {
        result.current.handleSubmit?.(fakeEvent);
      });

      expect(fakeEvent.preventDefault).toHaveBeenCalled();
      expect(result.current.isPending).toBe(false);
    });

    it('should merge uncontrolled form data with controlled formData on submit', async () => {
      const mockSubmit = vi.fn();
      const { result } = renderHook(() =>
        useFormController({
          initialValues: { controlled: 'value' },
          onSubmit: mockSubmit,
        }),
      );

      // Simulate controlled change
      act(() => {
        result.current.handleInputChange({ name: 'controlled', value: 'updated', valid: true });
      });

      // Create a form with an uncontrolled field
      const form = document.createElement('form');
      const input = document.createElement('input');
      input.name = 'uncontrolled';
      input.value = 'raw-value';
      form.appendChild(input);

      const fakeEvent = {
        preventDefault: vi.fn(),
        target: form,
      } as unknown as React.SubmitEvent<HTMLFormElement>;

      await act(async () => {
        result.current.handleSubmit?.(fakeEvent);
      });

      expect(mockSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          controlled: 'updated',
          uncontrolled: 'raw-value',
        }),
      );
    });

    it('should set isPending to false even if onSubmit throws', async () => {
      const failingSubmit = vi.fn(() => Promise.reject(new Error('fail')));

      const { result } = renderHook(() => useFormController({ onSubmit: failingSubmit }));

      const fakeEvent = {
        preventDefault: vi.fn(),
        target: document.createElement('form'),
      } as unknown as React.SubmitEvent<HTMLFormElement>;

      await act(async () => {
        try {
          await result.current.handleSubmit?.(fakeEvent);
        } catch {
          // expected
        }
      });

      await waitFor(() => {
        expect(result.current.isPending).toBe(false);
      });
    });

    it('should not reset on success when resetOnSuccess is false and submit succeeds', async () => {
      const mockSubmit = vi.fn(() => Promise.resolve());

      const { result } = renderHook(() =>
        useFormController({
          initialValues: { name: 'initial' },
          resetOnSuccess: false,
          onSubmit: mockSubmit,
        }),
      );

      const initialResetSignal = result.current.resetSignal;

      const fakeEvent = {
        preventDefault: vi.fn(),
        target: document.createElement('form'),
      } as unknown as React.SubmitEvent<HTMLFormElement>;

      await act(async () => {
        result.current.handleSubmit?.(fakeEvent);
      });

      await waitFor(() => {
        expect(mockSubmit).toHaveBeenCalled();
      });

      expect(result.current.resetSignal).toBe(initialResetSignal);
    });

    it('should handle initialValues as undefined', () => {
      const { result } = renderHook(() => useFormController({ onSubmit: vi.fn() }));

      expect(result.current.valid).toBe(true);
      expect(result.current.resetSignal).toBe(0);
    });
  });
});
