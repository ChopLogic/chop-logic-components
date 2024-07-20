import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ChopLogicAlert from '../Alert';

describe('ChopLogicAlert', () => {
  const testAlertProps = {
    isOpened: true,
    onClose: vi.fn(),
    title: 'Alert Title',
    message: 'This is an alert message.',
  };

  it('should render the dialog correctly after a delay', async () => {
    render(<ChopLogicAlert {...testAlertProps} />);
    const title = await screen.findByText(testAlertProps.title);
    expect(title).toBeInTheDocument();
  });
});
