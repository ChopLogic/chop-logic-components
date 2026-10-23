import { act, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import {
  _resetScrollLockState,
  acquireLock,
  releaseLock,
  SCROLL_LOCK_CLASS,
  useBodyScrollLock,
} from '../use-body-scroll-lock';

const TestComponent = ({ isLocked }: { isLocked: boolean }) => {
  useBodyScrollLock({ isLocked });
  return <div>Test Component</div>;
};

const hasScrollLockClass = () => document.documentElement.classList.contains(SCROLL_LOCK_CLASS);

describe('useBodyScrollLock', () => {
  beforeEach(() => {
    document.documentElement.classList.remove(SCROLL_LOCK_CLASS);
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    _resetScrollLockState();
  });

  afterEach(() => {
    document.documentElement.classList.remove(SCROLL_LOCK_CLASS);
    vi.restoreAllMocks();
    _resetScrollLockState();
  });

  describe('acquireLock', () => {
    it('should add scroll lock class on first lock', () => {
      Object.defineProperty(window, 'scrollY', { value: 123, writable: true });

      acquireLock();

      expect(hasScrollLockClass()).toBe(true);
    });

    it('should not add class twice if already locked', () => {
      acquireLock(); // First lock
      expect(hasScrollLockClass()).toBe(true);

      acquireLock(); // Second lock - class should still be present (not duplicated)
      expect(hasScrollLockClass()).toBe(true);
      expect(document.documentElement.classList.length).toBe(1);
    });
  });

  describe('releaseLock', () => {
    it('should remove class and restore scroll when last lock is released', () => {
      Object.defineProperty(window, 'scrollY', { value: 456, writable: true });

      acquireLock();
      expect(hasScrollLockClass()).toBe(true);

      releaseLock();

      expect(hasScrollLockClass()).toBe(false);
      expect(window.scrollTo).toHaveBeenCalledWith(0, 456);
    });

    it('should not remove class when other locks remain', () => {
      acquireLock();
      acquireLock();

      releaseLock(); // One lock remains

      expect(hasScrollLockClass()).toBe(true);
      expect(window.scrollTo).not.toHaveBeenCalled();
    });
  });

  describe('hook integration', () => {
    it('should add scroll lock class when isLocked is true', () => {
      render(<TestComponent isLocked={true} />);

      expect(hasScrollLockClass()).toBe(true);
    });

    it('should not add scroll lock class when isLocked is false', () => {
      render(<TestComponent isLocked={false} />);

      expect(hasScrollLockClass()).toBe(false);
    });

    it('should remove scroll lock class when isLocked becomes false', () => {
      const { rerender } = render(<TestComponent isLocked={true} />);

      expect(hasScrollLockClass()).toBe(true);

      rerender(<TestComponent isLocked={false} />);

      expect(hasScrollLockClass()).toBe(false);
    });

    it('should restore scroll position when unlocked', () => {
      Object.defineProperty(window, 'scrollY', { value: 500, writable: true });

      const { rerender } = render(<TestComponent isLocked={true} />);

      expect(hasScrollLockClass()).toBe(true);

      rerender(<TestComponent isLocked={false} />);

      expect(window.scrollTo).toHaveBeenCalledWith(0, 500);
    });

    it('should clean up on unmount', () => {
      Object.defineProperty(window, 'scrollY', { value: 200, writable: true });

      const { unmount } = render(<TestComponent isLocked={true} />);

      expect(hasScrollLockClass()).toBe(true);

      unmount();

      expect(hasScrollLockClass()).toBe(false);
      expect(window.scrollTo).toHaveBeenCalledWith(0, 200);
    });

    it('should not restore state when unlocking if never locked', () => {
      const { rerender } = render(<TestComponent isLocked={false} />);

      rerender(<TestComponent isLocked={false} />);

      expect(hasScrollLockClass()).toBe(false);
      expect(window.scrollTo).not.toHaveBeenCalled();
    });

    it('should not do anything on unmount if never locked', () => {
      const { unmount } = render(<TestComponent isLocked={false} />);

      unmount();

      expect(hasScrollLockClass()).toBe(false);
      expect(window.scrollTo).not.toHaveBeenCalled();
    });

    it('should handle toggling lock state multiple times', () => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true });

      const { rerender } = render(<TestComponent isLocked={false} />);
      expect(hasScrollLockClass()).toBe(false);

      rerender(<TestComponent isLocked={true} />);
      expect(hasScrollLockClass()).toBe(true);

      rerender(<TestComponent isLocked={false} />);
      expect(hasScrollLockClass()).toBe(false);
      expect(window.scrollTo).toHaveBeenCalledWith(0, 100);

      vi.mocked(window.scrollTo).mockClear();
      Object.defineProperty(window, 'scrollY', { value: 200, writable: true });

      rerender(<TestComponent isLocked={true} />);
      expect(hasScrollLockClass()).toBe(true);

      rerender(<TestComponent isLocked={false} />);
      expect(hasScrollLockClass()).toBe(false);
      expect(window.scrollTo).toHaveBeenCalledWith(0, 200);
    });
  });

  describe('single dialog unlock via rerender', () => {
    it('should release lock and restore state when single dialog transitions to unlocked', () => {
      Object.defineProperty(window, 'scrollY', { value: 999, writable: true });

      const { rerender } = render(<TestComponent isLocked={true} />);

      expect(hasScrollLockClass()).toBe(true);

      act(() => {
        rerender(<TestComponent isLocked={false} />);
      });

      expect(hasScrollLockClass()).toBe(false);
      expect(window.scrollTo).toHaveBeenCalledWith(0, 999);
    });
  });

  describe('stacked dialogs coordination', () => {
    it('should keep scroll locked when closing first dialog while second remains open', () => {
      const { rerender: rerenderA } = render(<TestComponent isLocked={true} />);
      const { rerender: rerenderB } = render(<TestComponent isLocked={true} />);

      rerenderA(<TestComponent isLocked={false} />);
      expect(hasScrollLockClass()).toBe(true);

      rerenderB(<TestComponent isLocked={false} />);
      expect(hasScrollLockClass()).toBe(false);
    });

    it('should keep scroll locked when closing second dialog while first remains open', () => {
      const { rerender: rerenderA } = render(<TestComponent isLocked={true} />);
      const { rerender: rerenderB } = render(<TestComponent isLocked={true} />);

      rerenderB(<TestComponent isLocked={false} />);
      expect(hasScrollLockClass()).toBe(true);

      rerenderA(<TestComponent isLocked={false} />);
      expect(hasScrollLockClass()).toBe(false);
    });

    it('should restore scroll position only after all dialogs close', () => {
      Object.defineProperty(window, 'scrollY', { value: 300, writable: true });

      const { rerender: rerenderA } = render(<TestComponent isLocked={true} />);
      const { rerender: rerenderB } = render(<TestComponent isLocked={true} />);

      rerenderA(<TestComponent isLocked={false} />);
      expect(window.scrollTo).not.toHaveBeenCalled();

      rerenderB(<TestComponent isLocked={false} />);
      expect(window.scrollTo).toHaveBeenCalledWith(0, 300);
    });

    it('should handle unmounting stacked dialogs correctly', () => {
      const { unmount: unmountA } = render(<TestComponent isLocked={true} />);
      const { unmount: unmountB } = render(<TestComponent isLocked={true} />);

      unmountA();
      expect(hasScrollLockClass()).toBe(true);

      unmountB();
      expect(hasScrollLockClass()).toBe(false);
    });

    it('should handle three stacked dialogs', () => {
      const { rerender: rerenderA } = render(<TestComponent isLocked={true} />);
      const { rerender: rerenderB } = render(<TestComponent isLocked={true} />);
      const { rerender: rerenderC } = render(<TestComponent isLocked={true} />);

      rerenderC(<TestComponent isLocked={false} />);
      expect(hasScrollLockClass()).toBe(true);

      rerenderB(<TestComponent isLocked={false} />);
      expect(hasScrollLockClass()).toBe(true);

      rerenderA(<TestComponent isLocked={false} />);
      expect(hasScrollLockClass()).toBe(false);
    });
  });
});
