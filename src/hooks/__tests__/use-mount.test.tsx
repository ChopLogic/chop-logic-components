import { useEffect } from 'react';
import { render, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import { useMount } from 'hooks/use-mount';

// Mock component to test the hook
const TestComponent = ({ isOpened, delay }: { isOpened: boolean; delay?: number }) => {
  const isMounted = useMount(isOpened, delay);
  useEffect(() => {
    return;
  }, [isMounted]);

  return <div data-testid='test-element'>{isMounted ? 'Mounted' : 'Not Mounted'}</div>;
};

describe('useMount test:', () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it('should set isMounted to true when isOpened is true', () => {
    const { getByTestId } = render(<TestComponent isOpened={true} />);

    const testElement = getByTestId('test-element');
    expect(testElement.textContent).toBe('Mounted');
  });

  it('should set isMounted to false after the delay when isOpened is false', () => {
    const { getByTestId, rerender } = render(<TestComponent isOpened={true} delay={300} />);

    const testElement = getByTestId('test-element');
    expect(testElement.textContent).toBe('Mounted');

    rerender(<TestComponent isOpened={false} delay={300} />);
    expect(testElement.textContent).toBe('Mounted'); // Still mounted

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(testElement.textContent).toBe('Not Mounted'); // Unmounted after delay
  });

  it('should not change isMounted immediately when isOpened changes to false', () => {
    const { getByTestId, rerender } = render(<TestComponent isOpened={true} delay={300} />);

    const testElement = getByTestId('test-element');
    expect(testElement.textContent).toBe('Mounted');

    rerender(<TestComponent isOpened={false} delay={300} />);
    expect(testElement.textContent).toBe('Mounted'); // Still mounted
  });

  it('should set isMounted to false immediately if delay is set to 0', () => {
    const { getByTestId, rerender } = render(<TestComponent isOpened={true} delay={0} />);

    const testElement = getByTestId('test-element');
    expect(testElement.textContent).toBe('Mounted');

    rerender(<TestComponent isOpened={false} delay={0} />);

    act(() => {
      vi.advanceTimersByTime(0);
    });

    expect(testElement.textContent).toBe('Not Mounted');
  });
});
