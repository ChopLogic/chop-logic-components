import { useRef } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useModalFocusTrap } from 'hooks/use-modal-focus-trap';
import userEvent from '@testing-library/user-event';

// Mock component to test the hook
const TestModal = ({ isOpened }: { isOpened: boolean }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useModalFocusTrap({ modalRef, isOpened });

  return (
    <div ref={modalRef}>
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
    </div>
  );
};

describe('useModalFocusTrap  tests:', () => {
  it('should trap focus inside the modal when it is opened', async () => {
    const { getByText } = render(<TestModal isOpened={true} />);

    const button1 = getByText('Button 1');
    const button2 = getByText('Button 2');
    const button3 = getByText('Button 3');

    // Focus the first button and move the focus by Tab key
    button1.focus();
    expect(document.activeElement).toBe(button1);

    await userEvent.tab();
    expect(document.activeElement).toBe(button2);

    await userEvent.tab();
    expect(document.activeElement).toBe(button3);

    await userEvent.tab();
    expect(document.activeElement).toBe(button1);

    // Simulate pressing Shift+Tab key to wrap focus backwards
    await userEvent.keyboard('{Shift>}[Tab]');
    expect(document.activeElement).toBe(button3);

    await userEvent.keyboard('{Shift>}[Tab]');
    expect(document.activeElement).toBe(button2);

    // Simulate pressing Shift+Tab key again
    await userEvent.keyboard('{Shift>}[Tab]');
    expect(document.activeElement).toBe(button1);
  });

  it('should not trap focus if the modal is not opened', () => {
    const { getByText } = render(<TestModal isOpened={false} />);

    const button1 = getByText('Button 1');

    // Focus the first button
    button1.focus();
    expect(document.activeElement).toBe(button1);

    // Simulate pressing Tab key
    fireEvent.keyDown(document.activeElement as Element, { key: 'Tab' });
    expect(document.activeElement).toBe(button1); // Focus should not move
  });
});
