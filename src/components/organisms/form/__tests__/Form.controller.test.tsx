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
  });
});
