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

    await userEvent.click(screen.getByRole('switch'));

    expect(defaultProps.onChange).toHaveBeenCalledWith(true);
  });

  it('does not toggle the switch when disabled', async () => {
    render(<Switch {...defaultProps} disabled={true} />);

    await userEvent.click(screen.getByRole('switch'));

    expect(defaultProps.onChange).not.toHaveBeenCalled();
  });

  it('toggles the switch using keyboard', async () => {
    render(<Switch {...defaultProps} />);

    await userEvent.type(screen.getByRole('switch'), '{space}');

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

  it('handles Space key for toggling', async () => {
    render(<Switch {...defaultProps} />);

    await userEvent.tab();
    await userEvent.keyboard('{ }');
    expect(defaultProps.onChange).toHaveBeenCalledWith(true);

    await userEvent.keyboard('{ }');
    expect(defaultProps.onChange).toHaveBeenCalledWith(false);
  });

  it('handles Enter key for toggling', async () => {
    render(<Switch {...defaultProps} />);

    await userEvent.tab();
    await userEvent.keyboard('{Enter}');
    expect(defaultProps.onChange).toHaveBeenCalledWith(true);

    await userEvent.keyboard('{Enter}');
    expect(defaultProps.onChange).toHaveBeenCalledWith(false);
  });

  it('does not handle keyboard events when disabled', async () => {
    render(<Switch {...defaultProps} disabled={true} />);

    // Simulate pressing the space key
    await userEvent.keyboard('{space}');
    expect(defaultProps.onChange).not.toHaveBeenCalled();

    // Simulate pressing the Enter key
    await userEvent.keyboard('{Enter}');
    expect(defaultProps.onChange).not.toHaveBeenCalled();
  });
});

// Loading state tests
describe('Loading state', () => {
  const loadingTestProps = {
    checked: false,
    onChange: vi.fn(),
    label: 'Test Switch',
    id: 'test-switch',
    name: 'test-switch',
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should have loading BEM modifier class when isLoading is true', () => {
    render(<Switch {...loadingTestProps} isLoading />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveClass('cl-switch_loading');
  });

  it('should not have loading BEM modifier class when isLoading is false', () => {
    render(<Switch {...loadingTestProps} isLoading={false} />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).not.toHaveClass('cl-switch_loading');
  });

  it('should have aria-busy="true" when isLoading is true', () => {
    render(<Switch {...loadingTestProps} isLoading />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('aria-busy', 'true');
  });

  it('should NOT toggle on click when isLoading is true', async () => {
    const mockOnChange = vi.fn();
    render(<Switch {...loadingTestProps} onChange={mockOnChange} isLoading />);
    await userEvent.click(screen.getByRole('switch'));
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  it('should NOT toggle on Space key press when isLoading is true', async () => {
    const mockOnChange = vi.fn();
    render(<Switch {...loadingTestProps} onChange={mockOnChange} isLoading />);
    const switchElement = screen.getByRole('switch');
    switchElement.focus();
    await userEvent.keyboard('{ }');
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  it('should NOT toggle on Enter key press when isLoading is true', async () => {
    const mockOnChange = vi.fn();
    render(<Switch {...loadingTestProps} onChange={mockOnChange} isLoading />);
    const switchElement = screen.getByRole('switch');
    switchElement.focus();
    await userEvent.keyboard('{Enter}');
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  it('should have negative tabIndex when isLoading is true', () => {
    render(<Switch {...loadingTestProps} isLoading />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('tabIndex', '-1');
  });

  it('should have disabled input when isLoading is true', () => {
    render(<Switch {...loadingTestProps} isLoading />);
    const input = screen.getByTestId('switch-input');
    expect(input).toBeDisabled();
  });

  it('should keep checked state unchanged after interaction when isLoading is true', async () => {
    const mockOnChange = vi.fn();
    render(<Switch {...loadingTestProps} checked={true} onChange={mockOnChange} isLoading />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('aria-checked', 'true');
    await userEvent.click(switchElement);
    expect(switchElement).toHaveAttribute('aria-checked', 'true');
    expect(mockOnChange).not.toHaveBeenCalled();
  });
});
