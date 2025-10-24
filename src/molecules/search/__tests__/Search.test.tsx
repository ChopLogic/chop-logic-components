import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import Search from '../Search';

vi.mock('@hooks', () => ({
  useElementIds: vi.fn(() => ({ elementId: 'test-search' })),
  useDebounce: vi.fn((value) => value),
}));

vi.mock('@atoms', () => ({
  Button: vi.fn(({ onClick, label, disabled, icon, children }) => (
    <button
      data-testid={label.includes('Clear') ? 'clear-button' : 'search-button'}
      onClick={onClick}
      disabled={disabled}
    >
      {children || icon || label}
    </button>
  )),
  Input: vi.fn(({ children, ...props }) => (
    <div data-testid="input-wrapper">
      <input data-testid="search-input" {...props} />
      {children}
    </div>
  )),
  Label: vi.fn(({ label, inputId }) => (
    <label data-testid="search-label" htmlFor={inputId}>
      {label}
    </label>
  )),
  Icon: vi.fn(({ name }) => <span data-testid={`icon-${name}`}>Icon</span>),
}));

describe('Search', () => {
  const defaultProps = {
    label: 'Search products',
    name: 'q',
    onSearch: vi.fn(),
    onClear: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders with label and input', () => {
    render(<Search {...defaultProps} />);

    expect(screen.getByTestId('search-label')).toHaveTextContent('Search products');
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
  });

  it('calls onSearch automatically when typing in automatic mode', async () => {
    const user = userEvent.setup();
    render(<Search {...defaultProps} />);

    const input = screen.getByTestId('search-input');
    await user.type(input, 'test query');

    expect(defaultProps.onSearch).toHaveBeenCalledWith('test query');
  });

  it('calls onSearch on Enter key press', async () => {
    const user = userEvent.setup();
    render(<Search {...defaultProps} />);

    const input = screen.getByTestId('search-input');
    await user.type(input, 'test');
    await user.keyboard('{Enter}');

    expect(defaultProps.onSearch).toHaveBeenCalledWith('test');
  });

  it('calls onClear on Escape key press', async () => {
    const user = userEvent.setup();
    render(<Search {...defaultProps} />);

    const input = screen.getByTestId('search-input');
    await user.type(input, 'test');
    await user.keyboard('{Escape}');

    expect(defaultProps.onClear).toHaveBeenCalled();
    expect(input).toHaveValue('');
  });

  it('shows clear button when there is text and clearable is true', async () => {
    const user = userEvent.setup();
    render(<Search {...defaultProps} clearable={true} />);

    const input = screen.getByTestId('search-input');
    await user.type(input, 'test');

    expect(screen.getByTestId('clear-button')).toBeInTheDocument();
  });

  it('hides clear button when clearable is false', async () => {
    const user = userEvent.setup();
    render(<Search {...defaultProps} clearable={false} />);

    const input = screen.getByTestId('search-input');
    await user.type(input, 'test');

    expect(screen.queryByTestId('clear-button')).not.toBeInTheDocument();
  });

  it('clears input and calls onClear when clear button is clicked', async () => {
    const user = userEvent.setup();
    render(<Search {...defaultProps} />);

    const input = screen.getByTestId('search-input');
    await user.type(input, 'test query');

    const clearButton = screen.getByTestId('clear-button');
    await user.click(clearButton);

    expect(input).toHaveValue('');
    expect(defaultProps.onClear).toHaveBeenCalled();
  });

  it('shows search button in manual mode', () => {
    render(<Search {...defaultProps} searchMode="manual" />);

    expect(screen.getByTestId('search-button')).toBeInTheDocument();
  });

  it('hides search button in automatic mode', () => {
    render(<Search {...defaultProps} searchMode="automatic" />);

    expect(screen.queryByTestId('search-button')).not.toBeInTheDocument();
  });

  it('calls onSearch when search button is clicked in manual mode', async () => {
    const user = userEvent.setup();
    render(<Search {...defaultProps} searchMode="manual" />);

    const input = screen.getByTestId('search-input');
    await user.type(input, 'manual search');

    const searchButton = screen.getByTestId('search-button');
    await user.click(searchButton);

    expect(defaultProps.onSearch).toHaveBeenCalledWith('manual search');
  });

  it('does not call onSearch for empty values in automatic mode', async () => {
    const user = userEvent.setup();
    const onSearch = vi.fn();
    render(<Search {...defaultProps} onSearch={onSearch} />);

    const input = screen.getByTestId('search-input');
    await user.type(input, '   '); // Only spaces
    await user.clear(input);

    expect(onSearch).not.toHaveBeenCalled();
  });

  it('handles disabled state correctly', async () => {
    const user = userEvent.setup();
    render(<Search {...defaultProps} disabled={true} />);

    const input = screen.getByTestId('search-input');
    await user.type(input, 'test');

    expect(input).toBeDisabled();
  });

  it('focuses input after clear', async () => {
    const user = userEvent.setup();
    render(<Search {...defaultProps} />);

    const input = screen.getByTestId('search-input');
    await user.type(input, 'test');

    const clearButton = screen.getByTestId('clear-button');
    await user.click(clearButton);

    expect(input).toHaveFocus();
  });

  it('applies custom placeholder', () => {
    render(<Search {...defaultProps} placeholder="Custom placeholder" />);

    expect(screen.getByTestId('search-input')).toHaveAttribute('placeholder', 'Custom placeholder');
  });

  it('passes through additional input attributes', () => {
    render(
      <Search {...defaultProps} maxLength={50} minLength={2} autoComplete="on" spellCheck={true} />,
    );

    const input = screen.getByTestId('search-input');
    expect(input).toHaveAttribute('maxLength', '50');
    expect(input).toHaveAttribute('minLength', '2');
    expect(input).toHaveAttribute('autoComplete', 'on');
    expect(input).toHaveAttribute('spellCheck', 'true');
  });

  it('handles onBlur and onFocus events', async () => {
    const user = userEvent.setup();
    const onBlur = vi.fn();
    const onFocus = vi.fn();

    render(<Search {...defaultProps} onBlur={onBlur} onFocus={onFocus} />);

    const input = screen.getByTestId('search-input');
    await user.click(input);
    await user.tab();

    expect(onFocus).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalled();
  });

  it('does not show icon in label for manual mode', () => {
    render(<Search {...defaultProps} searchMode="manual" />);

    // The icon should not be present in manual mode
    expect(screen.queryByTestId('icon-search')).not.toBeInTheDocument();
  });

  it('maintains input value during rapid typing', async () => {
    const user = userEvent.setup();
    render(<Search {...defaultProps} />);

    const input = screen.getByTestId('search-input');
    await user.type(input, 'quick typing test');

    expect(input).toHaveValue('quick typing test');
  });
});
