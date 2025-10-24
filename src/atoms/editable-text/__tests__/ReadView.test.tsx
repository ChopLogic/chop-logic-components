import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { ReadView } from '../ReadView';

describe('EditableText > ReadView', () => {
  const defaultProps = {
    value: 'Test Value',
    placeholder: 'Click to edit...',
    onClick: vi.fn(),
    className: 'test-class',
  };

  it('renders with provided value', () => {
    render(<ReadView {...defaultProps} />);

    expect(screen.getByText('Test Value')).toBeInTheDocument();
  });

  it('renders placeholder when value is empty', () => {
    render(<ReadView {...defaultProps} value="" />);

    expect(screen.getByText('Click to edit...')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const onClick = vi.fn();
    render(<ReadView {...defaultProps} onClick={onClick} />);

    const span = screen.getByText('Test Value');
    fireEvent.click(span);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('calls onClick when Enter key is pressed', () => {
    const onClick = vi.fn();
    render(<ReadView {...defaultProps} onClick={onClick} />);

    const span = screen.getByText('Test Value');
    fireEvent.keyDown(span, { key: 'Enter' });

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('calls onClick when Space key is pressed', () => {
    const onClick = vi.fn();
    render(<ReadView {...defaultProps} onClick={onClick} />);

    const span = screen.getByText('Test Value');
    fireEvent.keyDown(span, { key: ' ' });

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('prevents default behavior for Enter key', () => {
    const onClick = vi.fn();
    render(<ReadView {...defaultProps} onClick={onClick} />);

    const span = screen.getByText('Test Value');
    const event = fireEvent.keyDown(span, { key: 'Enter' });

    expect(event).toBe(false); // fireEvent returns false if preventDefault was called
  });

  it('prevents default behavior for Space key', () => {
    const onClick = vi.fn();
    render(<ReadView {...defaultProps} onClick={onClick} />);

    const span = screen.getByText('Test Value');
    const event = fireEvent.keyDown(span, { key: ' ' });

    expect(event).toBe(false);
  });

  it('does not call onClick for other keys', () => {
    const onClick = vi.fn();
    render(<ReadView {...defaultProps} onClick={onClick} />);

    const span = screen.getByText('Test Value');
    fireEvent.keyDown(span, { key: 'Tab' });
    fireEvent.keyDown(span, { key: 'Escape' });
    fireEvent.keyDown(span, { key: 'a' });

    expect(onClick).not.toHaveBeenCalled();
  });

  it('applies className prop', () => {
    render(<ReadView {...defaultProps} />);

    const span = screen.getByText('Test Value');
    expect(span).toHaveClass('test-class');
  });

  it('has proper accessibility attributes', () => {
    render(<ReadView {...defaultProps} />);

    const span = screen.getByText('Test Value');
    expect(span).toHaveAttribute('role', 'button');
    expect(span).toHaveAttribute('tabindex', '0');
  });

  it('passes through additional props', () => {
    const dataTestId = 'read-view';
    const viewId = 'custom-id';
    render(<ReadView {...defaultProps} data-testid={dataTestId} id={viewId} />);

    const span = screen.getByTestId(dataTestId);
    expect(span).toHaveAttribute('id', viewId);
  });

  it('handles empty string value', () => {
    render(<ReadView {...defaultProps} value="" />);

    expect(screen.getByText('Click to edit...')).toBeInTheDocument();
  });
});
