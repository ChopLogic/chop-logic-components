import { ChopLogicIconName } from '@enums';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import InputInnerButton from '../InputInnerButton';

import { DARK_THEME } from '@css';

describe('InputInnerButton', () => {
  const testProps = {
    onClick: vi.fn(),
    label: 'Test input',
    icon: ChopLogicIconName.Remove,
    theme: DARK_THEME,
  };

  it('should match the snapshot', () => {
    const { asFragment } = render(<InputInnerButton {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have the accessible label', () => {
    render(<InputInnerButton {...testProps} />);
    expect(screen.getByLabelText(testProps.label)).toBeInTheDocument();
  });

  it('should call onClear handler', async () => {
    render(<InputInnerButton {...testProps} />);
    await userEvent.click(screen.getByRole('button'));
    expect(testProps.onClick).toHaveBeenCalledOnce();
  });

  it('should have type button', () => {
    render(<InputInnerButton {...testProps} />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });
});
