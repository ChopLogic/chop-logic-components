import { IconName } from '@enums';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { InnerButton } from '../inner-button/InnerButton';

describe('InnerButton', () => {
  const testProps = {
    onClick: vi.fn(),
    label: 'Test input',
    icon: IconName.Remove,
  };

  it('should have the accessible label', () => {
    render(<InnerButton {...testProps} />);
    expect(screen.getByLabelText(testProps.label)).toBeInTheDocument();
  });

  it('should call onClick handler', async () => {
    render(<InnerButton {...testProps} />);
    await userEvent.click(screen.getByRole('button'));
    expect(testProps.onClick).toHaveBeenCalledOnce();
  });

  it('should have type button', () => {
    render(<InnerButton {...testProps} />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });
});
