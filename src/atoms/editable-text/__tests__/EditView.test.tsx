import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { EditView } from '../EditView';

describe('EditableText > EditView', () => {
  const defaultProps = {
    multiline: false,
    value: 'Test Value',
    placeholder: 'Type something...',
    onChange: vi.fn(),
    onBlur: vi.fn(),
    onKeyDown: vi.fn(),
    className: 'test-class',
    inputRef: { current: null },
  };

  it('renders input element when multiline is false', () => {
    render(<EditView {...defaultProps} />);

    const input = screen.getByDisplayValue('Test Value');
    expect(input.tagName).toBe('INPUT');
  });

  it('renders textarea element when multiline is true', () => {
    render(<EditView {...defaultProps} multiline={true} />);

    const textarea = screen.getByDisplayValue('Test Value');
    expect(textarea.tagName).toBe('TEXTAREA');
  });

  it('displays the correct value', () => {
    render(<EditView {...defaultProps} value='Custom Value' />);

    expect(screen.getByDisplayValue('Custom Value')).toBeInTheDocument();
  });

  it('shows placeholder text', () => {
    render(<EditView {...defaultProps} value='' />);

    const input = screen.getByPlaceholderText('Type something...');
    expect(input).toBeInTheDocument();
  });

  it('calls onChange when input value changes', () => {
    const onChange = vi.fn();
    render(<EditView {...defaultProps} onChange={onChange} />);

    const input = screen.getByDisplayValue('Test Value');
    fireEvent.change(input, { target: { value: 'New Value' } });

    expect(onChange).toHaveBeenCalledWith('New Value');
  });

  it('calls onBlur when input loses focus', () => {
    const onBlur = vi.fn();
    render(<EditView {...defaultProps} onBlur={onBlur} />);

    const input = screen.getByDisplayValue('Test Value');
    fireEvent.blur(input);

    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('calls onKeyDown when key is pressed', () => {
    const onKeyDown = vi.fn();
    render(<EditView {...defaultProps} onKeyDown={onKeyDown} />);

    const input = screen.getByDisplayValue('Test Value');
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(onKeyDown).toHaveBeenCalledTimes(1);
    expect(onKeyDown).toHaveBeenCalledWith(expect.objectContaining({ key: 'Enter' }));
  });

  it('applies className prop', () => {
    render(<EditView {...defaultProps} />);

    const input = screen.getByDisplayValue('Test Value');
    expect(input).toHaveClass('test-class');
  });

  it('passes through additional props', () => {
    render(<EditView {...defaultProps} data-testid='edit-view' id='custom-input' />);

    const input = screen.getByTestId('edit-view');
    expect(input).toHaveAttribute('id', 'custom-input');
  });

  it('sets rows attribute for textarea when multiline', () => {
    render(<EditView {...defaultProps} multiline={true} />);

    const textarea = screen.getByDisplayValue('Test Value');
    expect(textarea).toHaveAttribute('rows', '3');
  });

  it('does not set rows attribute for input element', () => {
    render(<EditView {...defaultProps} multiline={false} />);

    const input = screen.getByDisplayValue('Test Value');
    expect(input).not.toHaveAttribute('rows');
  });

  it('handles empty string value', () => {
    render(<EditView {...defaultProps} value='' />);

    const input = screen.getByPlaceholderText('Type something...');
    expect(input).toHaveValue('');
  });

  it('handles undefined value by converting to empty string', () => {
    // @ts-expect-error Testing undefined value handling
    render(<EditView {...defaultProps} value={undefined} />);

    const input = screen.getByPlaceholderText('Type something...');
    expect(input).toHaveValue('');
  });

  it('memoizes change handler with useCallback', () => {
    const onChange1 = vi.fn();
    const onChange2 = vi.fn();

    const { rerender } = render(<EditView {...defaultProps} onChange={onChange1} />);

    const input = screen.getByDisplayValue('Test Value');
    const firstHandler = (input as any).onchange;

    rerender(<EditView {...defaultProps} onChange={onChange2} />);

    expect((input as any).onchange).toBe(firstHandler);
  });

  it('forwards ref to input element', () => {
    const ref = { current: null };
    render(<EditView {...defaultProps} inputRef={ref} />);

    const input = screen.getByDisplayValue('Test Value');
    expect(ref.current).toBe(input);
  });

  it('handles various input types and values', () => {
    const onChange = vi.fn();
    render(<EditView {...defaultProps} onChange={onChange} />);

    const input = screen.getByDisplayValue('Test Value');

    // Test various input scenarios
    fireEvent.change(input, { target: { value: 'Simple text' } });
    fireEvent.change(input, { target: { value: '123' } });
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.change(input, { target: { value: '   ' } });

    expect(onChange).toHaveBeenCalledTimes(4);
    expect(onChange).toHaveBeenCalledWith('Simple text');
    expect(onChange).toHaveBeenCalledWith('123');
    expect(onChange).toHaveBeenCalledWith('');
    expect(onChange).toHaveBeenCalledWith('   ');
  });
});
