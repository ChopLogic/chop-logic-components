import { render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { _resetScrollLockState, useBodyScrollLock } from '../use-body-scroll-lock';

const TestComponent = ({ isLocked }: { isLocked: boolean }) => {
  useBodyScrollLock({ isLocked });
  return <div>Test Component</div>;
};

describe('useBodyScrollLock', () => {
  let originalOverflow: string;

  beforeEach(() => {
    originalOverflow = document.body.style.overflow;
    document.body.style.overflow = '';
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    _resetScrollLockState();
  });

  afterEach(() => {
    document.body.style.overflow = originalOverflow;
    vi.restoreAllMocks();
    _resetScrollLockState();
  });

  it('should set overflow clip on body when isLocked is true', () => {
    render(<TestComponent isLocked={true} />);

    expect(document.body.style.overflow).toBe('clip');
  });

  it('should not set overflow clip on body when isLocked is false', () => {
    render(<TestComponent isLocked={false} />);

    expect(document.body.style.overflow).toBe('');
  });

  it('should restore original overflow when isLocked becomes false', () => {
    const { rerender } = render(<TestComponent isLocked={true} />);

    expect(document.body.style.overflow).toBe('clip');

    rerender(<TestComponent isLocked={false} />);

    expect(document.body.style.overflow).toBe('');
  });

  it('should restore scroll position when unlocked', () => {
    Object.defineProperty(window, 'scrollY', { value: 500, writable: true });

    const { rerender } = render(<TestComponent isLocked={true} />);

    expect(document.body.style.overflow).toBe('clip');

    rerender(<TestComponent isLocked={false} />);

    expect(window.scrollTo).toHaveBeenCalledWith(0, 500);
  });

  it('should clean up on unmount', () => {
    Object.defineProperty(window, 'scrollY', { value: 200, writable: true });

    const { unmount } = render(<TestComponent isLocked={true} />);

    expect(document.body.style.overflow).toBe('clip');

    unmount();

    expect(document.body.style.overflow).toBe('');
    expect(window.scrollTo).toHaveBeenCalledWith(0, 200);
  });

  it('should preserve original overflow value when restoring', () => {
    document.body.style.overflow = 'auto';

    const { unmount } = render(<TestComponent isLocked={true} />);

    expect(document.body.style.overflow).toBe('clip');

    unmount();

    expect(document.body.style.overflow).toBe('auto');
  });

  describe('stacked dialogs coordination', () => {
    it('should keep body locked when closing first dialog while second remains open (A opens, B opens, A closes, B closes)', () => {
      // Dialog A opens
      const { rerender: rerenderA } = render(<TestComponent isLocked={true} />);
      expect(document.body.style.overflow).toBe('clip');

      // Dialog B opens
      const { rerender: rerenderB } = render(<TestComponent isLocked={true} />);
      expect(document.body.style.overflow).toBe('clip');

      // Dialog A closes - body should still be locked because B is open
      rerenderA(<TestComponent isLocked={false} />);
      expect(document.body.style.overflow).toBe('clip');

      // Dialog B closes - now body should be unlocked
      rerenderB(<TestComponent isLocked={false} />);
      expect(document.body.style.overflow).toBe('');
    });

    it('should keep body locked when closing second dialog while first remains open (A opens, B opens, B closes, A closes)', () => {
      // Dialog A opens
      const { rerender: rerenderA } = render(<TestComponent isLocked={true} />);
      expect(document.body.style.overflow).toBe('clip');

      // Dialog B opens
      const { rerender: rerenderB } = render(<TestComponent isLocked={true} />);
      expect(document.body.style.overflow).toBe('clip');

      // Dialog B closes - body should still be locked because A is open
      rerenderB(<TestComponent isLocked={false} />);
      expect(document.body.style.overflow).toBe('clip');

      // Dialog A closes - now body should be unlocked
      rerenderA(<TestComponent isLocked={false} />);
      expect(document.body.style.overflow).toBe('');
    });

    it('should restore original scroll position only after all dialogs close', () => {
      Object.defineProperty(window, 'scrollY', { value: 300, writable: true });

      // Dialog A opens - captures scroll position
      const { rerender: rerenderA } = render(<TestComponent isLocked={true} />);

      // Dialog B opens
      const { rerender: rerenderB } = render(<TestComponent isLocked={true} />);

      // Dialog A closes - should NOT restore scroll yet
      rerenderA(<TestComponent isLocked={false} />);
      expect(window.scrollTo).not.toHaveBeenCalled();

      // Dialog B closes - should restore scroll now
      rerenderB(<TestComponent isLocked={false} />);
      expect(window.scrollTo).toHaveBeenCalledWith(0, 300);
    });

    it('should handle unmounting stacked dialogs correctly', () => {
      // Dialog A opens
      const { unmount: unmountA } = render(<TestComponent isLocked={true} />);
      expect(document.body.style.overflow).toBe('clip');

      // Dialog B opens
      const { unmount: unmountB } = render(<TestComponent isLocked={true} />);
      expect(document.body.style.overflow).toBe('clip');

      // Dialog A unmounts - body should still be locked
      unmountA();
      expect(document.body.style.overflow).toBe('clip');

      // Dialog B unmounts - now body should be unlocked
      unmountB();
      expect(document.body.style.overflow).toBe('');
    });

    it('should handle three stacked dialogs', () => {
      // Dialog A opens
      const { rerender: rerenderA } = render(<TestComponent isLocked={true} />);
      // Dialog B opens
      const { rerender: rerenderB } = render(<TestComponent isLocked={true} />);
      // Dialog C opens
      const { rerender: rerenderC } = render(<TestComponent isLocked={true} />);

      expect(document.body.style.overflow).toBe('clip');

      // Close in reverse order (C, B, A)
      rerenderC(<TestComponent isLocked={false} />);
      expect(document.body.style.overflow).toBe('clip');

      rerenderB(<TestComponent isLocked={false} />);
      expect(document.body.style.overflow).toBe('clip');

      rerenderA(<TestComponent isLocked={false} />);
      expect(document.body.style.overflow).toBe('');
    });
  });
});
