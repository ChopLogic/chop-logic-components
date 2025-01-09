import { useRef } from 'react';
import { useKeyPress } from '@hooks';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

const TestComponent = ({ keyCode, onKeyPress }: { keyCode: string; onKeyPress: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  useKeyPress({ ref, keyCode, onKeyPress });

  return (
    <div ref={ref} data-testid='test-element'>
      Test Text
    </div>
  );
};

describe('useKeyPress  tests:', () => {
  it('should call onKeyPress handler when the specific key is pressed', async () => {
    const onKeyPress = vi.fn();
    const keyCode = 'Escape';

    const { getByTestId } = render(<TestComponent keyCode={keyCode} onKeyPress={onKeyPress} />);

    const testElement = getByTestId('test-element');

    // Focus the test element to ensure ref is current
    testElement.focus();

    // Simulate pressing the specific key
    await userEvent.keyboard(`{${keyCode}}`);

    expect(onKeyPress).toHaveBeenCalled();
  });

  it('should not call onKeyPress handler when a different key is pressed', async () => {
    const onKeyPress = vi.fn();
    const keyCode = 'Escape';

    const { getByTestId } = render(<TestComponent keyCode={keyCode} onKeyPress={onKeyPress} />);

    const testElement = getByTestId('test-element');

    // Focus the test element to ensure ref is current
    testElement.focus();

    // Simulate pressing a different key
    await userEvent.keyboard('[Enter]');

    expect(onKeyPress).not.toHaveBeenCalled();
  });
});
