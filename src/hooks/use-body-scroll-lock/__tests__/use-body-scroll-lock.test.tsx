import { act, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import {
  _resetScrollLockState,
  acquireLock,
  releaseLock,
  useBodyScrollLock,
} from '../use-body-scroll-lock';

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

  describe('acquireLock', () => {
    it('should save state and set overflow clip on first lock', () => {
      Object.defineProperty(window, 'scrollY', { value: 123, writable: true });
      document.body.style.overflow = 'auto';

      acquireLock();

      expect(document.body.style.overflow).toBe('clip');
    });

    it('should not change overflow if already locked', () => {
      document.body.style.overflow = 'auto';

      acquireLock(); // First lock
      expect(document.body.style.overflow).toBe('clip');

      document.body.style.overflow = 'scroll'; // Manually change

      acquireLock(); // Second lock - should not reset
      expect(document.body.style.overflow).toBe('scroll');
    });
  });

  describe('releaseLock', () => {
    it('should restore state when last lock is released', () => {
      Object.defineProperty(window, 'scrollY', { value: 456, writable: true });
      document.body.style.overflow = 'visible';

      acquireLock();
      expect(document.body.style.overflow).toBe('clip');

      releaseLock();

      expect(document.body.style.overflow).toBe('visible');
      expect(window.scrollTo).toHaveBeenCalledWith(0, 456);
    });

    it('should not restore state when other locks remain', () => {
      document.body.style.overflow = 'auto';

      acquireLock();
      acquireLock();

      releaseLock(); // One lock remains

      expect(document.body.style.overflow).toBe('clip');
      expect(window.scrollTo).not.toHaveBeenCalled();
    });
  });

  describe('hook integration', () => {
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

    it('should not restore state when unlocking if never locked', () => {
      const { rerender } = render(<TestComponent isLocked={false} />);

      rerender(<TestComponent isLocked={false} />);

      expect(document.body.style.overflow).toBe('');
      expect(window.scrollTo).not.toHaveBeenCalled();
    });

    it('should not do anything on unmount if never locked', () => {
      const { unmount } = render(<TestComponent isLocked={false} />);

      unmount();

      expect(document.body.style.overflow).toBe('');
      expect(window.scrollTo).not.toHaveBeenCalled();
    });

    it('should handle toggling lock state multiple times', () => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true });

      const { rerender } = render(<TestComponent isLocked={false} />);
      expect(document.body.style.overflow).toBe('');

      rerender(<TestComponent isLocked={true} />);
      expect(document.body.style.overflow).toBe('clip');

      rerender(<TestComponent isLocked={false} />);
      expect(document.body.style.overflow).toBe('');
      expect(window.scrollTo).toHaveBeenCalledWith(0, 100);

      vi.mocked(window.scrollTo).mockClear();
      Object.defineProperty(window, 'scrollY', { value: 200, writable: true });

      rerender(<TestComponent isLocked={true} />);
      expect(document.body.style.overflow).toBe('clip');

      rerender(<TestComponent isLocked={false} />);
      expect(document.body.style.overflow).toBe('');
      expect(window.scrollTo).toHaveBeenCalledWith(0, 200);
    });
  });

  describe('single dialog unlock via rerender', () => {
    it('should release lock and restore state when single dialog transitions to unlocked', () => {
      Object.defineProperty(window, 'scrollY', { value: 999, writable: true });
      document.body.style.overflow = 'visible';

      const { rerender } = render(<TestComponent isLocked={true} />);

      expect(document.body.style.overflow).toBe('clip');

      act(() => {
        rerender(<TestComponent isLocked={false} />);
      });

      expect(document.body.style.overflow).toBe('visible');
      expect(window.scrollTo).toHaveBeenCalledWith(0, 999);
    });
  });

  describe('stacked dialogs coordination', () => {
    it('should keep body locked when closing first dialog while second remains open', () => {
      const { rerender: rerenderA } = render(<TestComponent isLocked={true} />);
      const { rerender: rerenderB } = render(<TestComponent isLocked={true} />);

      rerenderA(<TestComponent isLocked={false} />);
      expect(document.body.style.overflow).toBe('clip');

      rerenderB(<TestComponent isLocked={false} />);
      expect(document.body.style.overflow).toBe('');
    });

    it('should keep body locked when closing second dialog while first remains open', () => {
      const { rerender: rerenderA } = render(<TestComponent isLocked={true} />);
      const { rerender: rerenderB } = render(<TestComponent isLocked={true} />);

      rerenderB(<TestComponent isLocked={false} />);
      expect(document.body.style.overflow).toBe('clip');

      rerenderA(<TestComponent isLocked={false} />);
      expect(document.body.style.overflow).toBe('');
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
      expect(document.body.style.overflow).toBe('clip');

      unmountB();
      expect(document.body.style.overflow).toBe('');
    });

    it('should handle three stacked dialogs', () => {
      const { rerender: rerenderA } = render(<TestComponent isLocked={true} />);
      const { rerender: rerenderB } = render(<TestComponent isLocked={true} />);
      const { rerender: rerenderC } = render(<TestComponent isLocked={true} />);

      rerenderC(<TestComponent isLocked={false} />);
      expect(document.body.style.overflow).toBe('clip');

      rerenderB(<TestComponent isLocked={false} />);
      expect(document.body.style.overflow).toBe('clip');

      rerenderA(<TestComponent isLocked={false} />);
      expect(document.body.style.overflow).toBe('');
    });
  });
});
