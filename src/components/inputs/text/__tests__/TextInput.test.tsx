import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import TextInput from '../TextInput';
import userEvent from '@testing-library/user-event';

describe('ChopLogicTextInput component', () => {
  const testProps = {
    id: 'test-input-id',
    name: 'testInput',
    label: 'Test Input:',
    placeholder: 'Enter text here...',
    valid: true,
  };

  it('should render the input correctly', () => {
    const { asFragment } = render(<TextInput {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the required input correctly', () => {
    const { asFragment } = render(<TextInput {...testProps} required={true} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display the label text', () => {
    render(<TextInput {...testProps} />);
    expect(screen.getByLabelText(testProps.label)).toBeInTheDocument();
  });

  it('should be required if required prop is true', () => {
    render(<TextInput {...testProps} required />);
    expect(screen.getByRole('textbox')).toBeRequired();
  });

  it('should be disabled if disabled prop is true', () => {
    render(<TextInput {...testProps} disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('should be display an error message', () => {
    const testMessage = 'Test Error';
    render(<TextInput {...testProps} valid={false} errorMessage={testMessage} />);
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });

  it('should call onChange handler when a user types something', async () => {
    const mockedOnChange = vi.fn();
    render(<TextInput {...testProps} onChange={mockedOnChange} />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, '1');
    expect(mockedOnChange).toHaveBeenCalledOnce();
    await userEvent.type(input, '23');
    expect(mockedOnChange).toHaveBeenCalledTimes(3);
  });

  it('should display the entered text', async () => {
    render(<TextInput {...testProps} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('');
    await userEvent.type(input, 'test');
    expect(input).toHaveValue('test');
  });

  it('should allow to remove the entered text', async () => {
    render(<TextInput {...testProps} />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 't');
    await userEvent.keyboard('[Backspace]');
    expect(input).toHaveValue('');
  });
});
