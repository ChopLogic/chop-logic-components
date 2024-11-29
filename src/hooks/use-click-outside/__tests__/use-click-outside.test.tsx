import { useRef } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { useClickOutside } from '@/hooks';

const TestComponent = ({ onClickOutsideHandler }: { onClickOutsideHandler: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const dependentRef = useRef<HTMLDivElement>(null);

  useClickOutside({ ref, onClickOutsideHandler, dependentRef });

  return (
    <div>
      <div ref={ref} data-testid='inside-element'>
        Inside Element
      </div>
      <div ref={dependentRef} data-testid='dependent-element'>
        Dependent Element
      </div>
      <div data-testid='outside-element'>Outside Element</div>
    </div>
  );
};

describe('useClickOutside tests:', () => {
  it('should call onClickOutsideHandler when clicking outside the ref element', async () => {
    const onClickOutsideHandler = vi.fn();
    const { getByTestId } = render(<TestComponent onClickOutsideHandler={onClickOutsideHandler} />);

    const outsideElement = getByTestId('outside-element');

    await userEvent.click(outsideElement);

    expect(onClickOutsideHandler).toHaveBeenCalled();
  });

  it('should not call onClickOutsideHandler when clicking inside the ref element', async () => {
    const onClickOutsideHandler = vi.fn();
    const { getByTestId } = render(<TestComponent onClickOutsideHandler={onClickOutsideHandler} />);

    const insideElement = getByTestId('inside-element');

    await userEvent.click(insideElement);

    expect(onClickOutsideHandler).not.toHaveBeenCalled();
  });

  it('should call onClickOutsideHandler when clicking outside both ref and dependent ref elements', async () => {
    const onClickOutsideHandler = vi.fn();
    const { getByTestId } = render(<TestComponent onClickOutsideHandler={onClickOutsideHandler} />);

    const outsideElement = getByTestId('outside-element');

    await userEvent.click(outsideElement);

    expect(onClickOutsideHandler).toHaveBeenCalled();
  });

  it('should not call onClickOutsideHandler when clicking inside the dependent ref element', async () => {
    const onClickOutsideHandler = vi.fn();
    const { getByTestId } = render(<TestComponent onClickOutsideHandler={onClickOutsideHandler} />);

    const dependentElement = getByTestId('dependent-element');

    await userEvent.click(dependentElement);

    expect(onClickOutsideHandler).not.toHaveBeenCalled();
  });
});
