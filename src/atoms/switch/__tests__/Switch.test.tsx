import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import Switch from '../Switch';

describe('Switch', () => {
  const defaultProps = {
    checked: false,
    onChange: vi.fn(),
    label: 'Test Switch',
    disabled: false,
    id: 'test-switch',
    name: 'test-switch',
    value: 'on',
    hasIndicator: true,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the switch with correct label', () => {
    render(<Switch {...defaultProps} />);

    const switchElement = screen.getByRole('switch', { name: 'Test Switch' });
    expect(switchElement).toBeInTheDocument();
  });

  it('toggles the switch when clicked', async () => {
    render(<Switch {...defaultProps} />);

    const switchElement = screen.getByRole('switch');
    await userEvent.click(switchElement);

    expect(defaultProps.onChange).toHaveBeenCalledWith(true);
  });

  it('does not toggle the switch when disabled', async () => {
    render(<Switch {...defaultProps} disabled={true} />);

    const switchElement = screen.getByRole('switch');
    await userEvent.click(switchElement);

    expect(defaultProps.onChange).not.toHaveBeenCalled();
  });

  it('toggles the switch using keyboard', async () => {
    render(<Switch {...defaultProps} />);

    const switchElement = screen.getByRole('switch');
    await userEvent.type(switchElement, '{space}');

    expect(defaultProps.onChange).toHaveBeenCalledWith(true);
  });

  it('renders the indicator correctly', () => {
    render(<Switch {...defaultProps} checked={true} />);

    const indicator = screen.getByText('On');
    expect(indicator).toBeInTheDocument();
  });

  it('does not render the indicator when hasIndicator is false', () => {
    render(<Switch {...defaultProps} hasIndicator={false} />);

    const indicator = screen.queryByText('On');
    expect(indicator).not.toBeInTheDocument();
  });
});
