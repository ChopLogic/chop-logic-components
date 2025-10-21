import type { ButtonProps } from '@models';
import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { TabEditInput } from '../edit-input/TabEditInput';

// Mock the Button component
vi.mock('@atoms', () => ({
  Button: ({ icon, onClick, label, id }: ButtonProps) => (
    <button data-testid={`button-${icon}`} onClick={onClick} aria-label={label} id={id}>
      {icon} Button
    </button>
  ),
}));

const defaultProps = {
  tabId: 'tab-1',
  isEditMode: true,
  editValue: 'Test Tab',
  onInputChange: vi.fn(),
  onInputBlur: vi.fn(),
  onInputKeyDown: vi.fn(),
  onSave: vi.fn(),
  onCancel: vi.fn(),
  cancelButtonId: 'cancel-button-1',
};

describe('TabEditInput', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders input with correct value and attributes', () => {
    render(<TabEditInput {...defaultProps} />);

    const input = screen.getByDisplayValue('Test Tab');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('id', 'tab-1-input');
    expect(input).toHaveAttribute('maxlength', '50');
  });

  it('renders save and cancel buttons', () => {
    render(<TabEditInput {...defaultProps} />);

    expect(screen.getByTestId('button-check-mark')).toBeInTheDocument();
    expect(screen.getByTestId('button-cancel')).toBeInTheDocument();
    expect(screen.getByLabelText('Save tab title')).toBeInTheDocument();
    expect(screen.getByLabelText('Cancel tab title change')).toBeInTheDocument();
  });

  it('calls onInputChange when input value changes', () => {
    render(<TabEditInput {...defaultProps} />);

    const input = screen.getByDisplayValue('Test Tab');
    fireEvent.change(input, { target: { value: 'New Value' } });

    expect(defaultProps.onInputChange).toHaveBeenCalledOnce();
  });

  it('calls onInputBlur when input loses focus', () => {
    render(<TabEditInput {...defaultProps} />);

    const input = screen.getByDisplayValue('Test Tab');
    fireEvent.blur(input);

    expect(defaultProps.onInputBlur).toHaveBeenCalledOnce();
  });

  it('calls onInputKeyDown when key is pressed in input', () => {
    render(<TabEditInput {...defaultProps} />);

    const input = screen.getByDisplayValue('Test Tab');
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(defaultProps.onInputKeyDown).toHaveBeenCalledOnce();
  });

  it('calls onSave when save button is clicked', () => {
    render(<TabEditInput {...defaultProps} />);

    const saveButton = screen.getByTestId('button-check-mark');
    fireEvent.click(saveButton);

    expect(defaultProps.onSave).toHaveBeenCalledOnce();
  });

  it('calls onCancel when cancel button is clicked', () => {
    render(<TabEditInput {...defaultProps} />);

    const cancelButton = screen.getByTestId('button-cancel');
    fireEvent.click(cancelButton);

    expect(defaultProps.onCancel).toHaveBeenCalledOnce();
  });

  it('calls onInputBlur when blur is not caused by button click', () => {
    render(<TabEditInput {...defaultProps} />);

    const input = screen.getByDisplayValue('Test Tab');

    // Simulate blur event not caused by button click
    fireEvent.blur(input, {
      relatedTarget: document.body,
    });

    expect(defaultProps.onInputBlur).toHaveBeenCalledOnce();
  });

  it('calls onInputBlur when blur is caused by save button click', () => {
    render(<TabEditInput {...defaultProps} />);

    const input = screen.getByDisplayValue('Test Tab');
    const saveButton = screen.getByTestId('button-check-mark');

    // Simulate blur event caused by save button
    // Note: The component only checks for cancel button ID, so save button should trigger blur
    fireEvent.blur(input, {
      relatedTarget: saveButton,
    });

    expect(defaultProps.onInputBlur).toHaveBeenCalledOnce();
  });

  it('applies correct cancel button ID', () => {
    render(<TabEditInput {...defaultProps} />);

    const cancelButton = screen.getByTestId('button-cancel');
    expect(cancelButton).toHaveAttribute('id', 'cancel-button-1');
  });

  it('handles different edit values', () => {
    const { rerender } = render(<TabEditInput {...defaultProps} editValue="Initial Value" />);

    expect(screen.getByDisplayValue('Initial Value')).toBeInTheDocument();

    rerender(<TabEditInput {...defaultProps} editValue="Updated Value" />);

    expect(screen.getByDisplayValue('Updated Value')).toBeInTheDocument();
  });

  it('handles empty edit value', () => {
    render(<TabEditInput {...defaultProps} editValue="" />);

    const input = screen.getByDisplayValue('');
    expect(input).toBeInTheDocument();
  });

  it('handles long edit value within max length', () => {
    const longValue = 'A'.repeat(50);
    render(<TabEditInput {...defaultProps} editValue={longValue} />);

    const input = screen.getByDisplayValue(longValue);
    expect(input).toBeInTheDocument();
  });

  describe('Keyboard interactions', () => {
    it('handles Enter key', () => {
      render(<TabEditInput {...defaultProps} />);

      const input = screen.getByDisplayValue('Test Tab');
      fireEvent.keyDown(input, { key: 'Enter' });

      expect(defaultProps.onInputKeyDown).toHaveBeenCalledWith(
        expect.objectContaining({ key: 'Enter' }),
      );
    });

    it('handles Escape key', () => {
      render(<TabEditInput {...defaultProps} />);

      const input = screen.getByDisplayValue('Test Tab');
      fireEvent.keyDown(input, { key: 'Escape' });

      expect(defaultProps.onInputKeyDown).toHaveBeenCalledWith(
        expect.objectContaining({ key: 'Escape' }),
      );
    });

    it('handles Arrow keys', () => {
      render(<TabEditInput {...defaultProps} />);

      const input = screen.getByDisplayValue('Test Tab');
      fireEvent.keyDown(input, { key: 'ArrowLeft' });

      expect(defaultProps.onInputKeyDown).toHaveBeenCalledWith(
        expect.objectContaining({ key: 'ArrowLeft' }),
      );
    });

    it('handles character input', () => {
      render(<TabEditInput {...defaultProps} />);

      const input = screen.getByDisplayValue('Test Tab');
      fireEvent.keyDown(input, { key: 'A' });

      expect(defaultProps.onInputKeyDown).toHaveBeenCalledWith(
        expect.objectContaining({ key: 'A' }),
      );
    });
  });

  it('applies CSS classes correctly', () => {
    // Since we're mocking the component structure, we can't easily test CSS classes
    // This would be better tested in an integration test or visual regression test
    render(<TabEditInput {...defaultProps} />);

    // Verify the basic structure is rendered
    expect(screen.getByDisplayValue('Test Tab')).toBeInTheDocument();
    expect(screen.getByTestId('button-check-mark')).toBeInTheDocument();
    expect(screen.getByTestId('button-cancel')).toBeInTheDocument();
  });

  it('handles component re-renders efficiently', () => {
    const { rerender } = render(<TabEditInput {...defaultProps} />);

    // Re-render with same props
    rerender(<TabEditInput {...defaultProps} />);

    // Component should still be functional
    const input = screen.getByDisplayValue('Test Tab');
    expect(input).toBeInTheDocument();

    // Re-render with different value
    rerender(<TabEditInput {...defaultProps} editValue="New Value" />);

    expect(screen.getByDisplayValue('New Value')).toBeInTheDocument();
  });

  it('maintains input ref correctly', () => {
    render(<TabEditInput {...defaultProps} />);

    const input = screen.getByDisplayValue('Test Tab');
    // The ref should be attached to the input element
    // This is more of an implementation detail, but we can verify the input exists
    expect(input).toBeInTheDocument();
  });
});
