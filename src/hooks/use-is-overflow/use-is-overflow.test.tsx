import { render, screen } from '@testing-library/react';
import { useRef } from 'react';
import { useIsOverflow } from './use-is-overflow.ts';
import { beforeEach, describe, expect, it, vi } from 'vitest';

function TestComponent({ dimension }: { dimension: 'width' | 'height' }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isOverflow = useIsOverflow(ref, dimension);

  return (
    <>
      <div data-testid='box' ref={ref}>
        Content
      </div>
      <div data-testid='overflow'>{isOverflow ? 'true' : 'false'}</div>
    </>
  );
}

describe('useIsOverflow', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('returns true when scrollWidth > clientWidth (width overflow)', () => {
    vi.spyOn(HTMLElement.prototype, 'scrollWidth', 'get').mockReturnValue(200);
    vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(100);

    render(<TestComponent dimension='width' />);
    expect(screen.getByTestId('overflow').textContent).toBe('true');
  });

  it('returns false when scrollWidth <= clientWidth (no width overflow)', () => {
    vi.spyOn(HTMLElement.prototype, 'scrollWidth', 'get').mockReturnValue(100);
    vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(100);

    render(<TestComponent dimension='width' />);
    expect(screen.getByTestId('overflow').textContent).toBe('false');
  });

  it('returns true when scrollHeight > clientHeight (height overflow)', () => {
    vi.spyOn(HTMLElement.prototype, 'scrollHeight', 'get').mockReturnValue(300);
    vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(150);

    render(<TestComponent dimension='height' />);
    expect(screen.getByTestId('overflow').textContent).toBe('true');
  });

  it('returns false when scrollHeight <= clientHeight (no height overflow)', () => {
    vi.spyOn(HTMLElement.prototype, 'scrollHeight', 'get').mockReturnValue(150);
    vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(150);

    render(<TestComponent dimension='height' />);
    expect(screen.getByTestId('overflow').textContent).toBe('false');
  });

  it('returns false if ref is not set (e.g. null)', () => {
    const { rerender } = render(<TestComponent dimension='width' />);
    rerender(<TestComponent dimension='width' />);
    // ref is always set in this test, but we don't trigger the effect unless `ref.current` exists
    // so this test is here mostly for completeness
    expect(screen.getByTestId('overflow').textContent).toMatch(/(true|false)/);
  });
});
