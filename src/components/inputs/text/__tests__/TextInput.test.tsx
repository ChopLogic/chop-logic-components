import { ChopLogicForm } from '@organisms';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import TextInput from '../TextInput';

describe('ChopLogicTextInput', () => {
  const testProps = {
    id: 'test-input-id',
    name: 'test',
    label: 'Test Input',
    placeholder: 'Enter text here...',
    className: 'test-class',
    style: { width: '600px' },
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
    render(<TextInput {...testProps} errorMessage={testMessage} />);
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

  it('should allow to clear the entered text via Clear button', async () => {
    render(<TextInput {...testProps} />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 't');
    await userEvent.click(screen.getByRole('button'));
    expect(input).toHaveValue('');
  });

  it('should call onClear handler when Clear button is clicked', async () => {
    const mockClear = vi.fn();
    render(<TextInput {...testProps} onClear={mockClear} />);
    await userEvent.type(screen.getByRole('textbox'), 't');
    await userEvent.click(screen.getByRole('button'));
    expect(mockClear).toHaveBeenCalledOnce();
  });

  it('should not display the Clear button if clearable prop is false', () => {
    render(<TextInput {...testProps} clearable={false} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('should support the readOnly attribute', () => {
    render(<TextInput {...testProps} readOnly />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-readonly', 'true');
  });

  it('should have attribute autocomplete = off by default', () => {
    render(<TextInput {...testProps} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('autocomplete', 'off');
  });

  it('should take an initial value from the form context', async () => {
    render(
      <ChopLogicForm initialValues={{ test: 'testValue' }}>
        <TextInput {...testProps} />
      </ChopLogicForm>,
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('testValue');
  });

  it('should display the password toggle when input type is password', () => {
    render(<TextInput {...testProps} type='password' />);
    expect(screen.getByLabelText('Toggle password visibility')).toBeInTheDocument();
  });

  it('should toggle password visibility', async () => {
    render(<TextInput {...testProps} type='password' />);
    const input = screen.getByPlaceholderText(testProps.placeholder);
    expect(input).toHaveAttribute('type', 'password');
    await userEvent.click(screen.getByLabelText('Toggle password visibility'));
    expect(input).toHaveAttribute('type', 'text');
    await userEvent.click(screen.getByLabelText('Toggle password visibility'));
    expect(input).toHaveAttribute('type', 'password');
  });

  it('should have the correct email type', () => {
    render(<TextInput {...testProps} type='email' />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
  });

  it('should not show an error message by default', async () => {
    render(<TextInput {...testProps} type='email' errorMessage='Incorrect email' />);
    const errorMessage = await screen.findByText('Incorrect email');
    expect(errorMessage).toHaveAttribute('aria-hidden', 'true');
  });

  it('should show an error message if the input value is invalid', async () => {
    render(<TextInput {...testProps} validator={{ regexp: '^[A-Za-z ]+$' }} errorMessage='Only latin letters are allowed' />);
    await userEvent.type(screen.getByRole('textbox'), '123');
    const errorMessage = await screen.findByText('Only latin letters are allowed');
    expect(errorMessage).toHaveAttribute('aria-hidden', 'false');
  });

  it('should not show an error message if the input value is valid', async () => {
    render(<TextInput {...testProps} validator={{ regexp: '^[A-Za-z ]+$' }} errorMessage='Only latin letters are allowed' />);
    await userEvent.type(screen.getByRole('textbox'), 'asdfas');
    const errorMessage = await screen.findByText('Only latin letters are allowed');
    expect(errorMessage).toHaveAttribute('aria-hidden', 'true');
  });
});
