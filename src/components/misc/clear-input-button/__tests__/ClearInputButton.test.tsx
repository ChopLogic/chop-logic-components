import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import ClearInputButton from '../ClearInputButton';

describe('ClearInputButton', () => {
  const testProps = {
    onClear: vi.fn(),
    visible: true,
  };

  it('should match the snapshot', () => {
    const { asFragment } = render(<ClearInputButton {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have the accessible label', () => {
    render(<ClearInputButton {...testProps} />);
    expect(screen.getByLabelText('Clear the input')).toBeInTheDocument();
  });

  it('should call onClear handler', async () => {
    render(<ClearInputButton {...testProps} />);
    await userEvent.click(screen.getByRole('button'));
    expect(testProps.onClear).toHaveBeenCalledOnce();
  });
});
