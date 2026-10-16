import { render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useBodyScrollLock } from '../use-body-scroll-lock';

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
  });

  afterEach(() => {
    document.body.style.overflow = originalOverflow;
    vi.restoreAllMocks();
  });

  it('should set overflow hidden on body when isLocked is true', () => {
    render(<TestComponent isLocked={true} />);

    expect(document.body.style.overflow).toBe('hidden');
  });

  it('should not set overflow hidden on body when isLocked is false', () => {
    render(<TestComponent isLocked={false} />);

    expect(document.body.style.overflow).toBe('');
  });

  it('should restore original overflow when isLocked becomes false', () => {
    const { rerender } = render(<TestComponent isLocked={true} />);

    expect(document.body.style.overflow).toBe('hidden');

    rerender(<TestComponent isLocked={false} />);

    expect(document.body.style.overflow).toBe('');
  });

  it('should restore scroll position when unlocked', () => {
    Object.defineProperty(window, 'scrollY', { value: 500, writable: true });

    const { rerender } = render(<TestComponent isLocked={true} />);

    expect(document.body.style.overflow).toBe('hidden');

    rerender(<TestComponent isLocked={false} />);

    expect(window.scrollTo).toHaveBeenCalledWith(0, 500);
  });

  it('should clean up on unmount', () => {
    Object.defineProperty(window, 'scrollY', { value: 200, writable: true });

    const { unmount } = render(<TestComponent isLocked={true} />);

    expect(document.body.style.overflow).toBe('hidden');

    unmount();

    expect(document.body.style.overflow).toBe('');
    expect(window.scrollTo).toHaveBeenCalledWith(0, 200);
  });

  it('should preserve original overflow value when restoring', () => {
    document.body.style.overflow = 'auto';

    const { unmount } = render(<TestComponent isLocked={true} />);

    expect(document.body.style.overflow).toBe('hidden');

    unmount();

    expect(document.body.style.overflow).toBe('auto');
  });
});
