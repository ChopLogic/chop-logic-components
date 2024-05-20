import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import TextInput from '../TextInput';
import userEvent from '@testing-library/user-event';

describe('ChopLogicTextInput component', () => {
  const testProps = {
    id: 'test-input-id',
    name: 'testInput',
    label: 'Test Input:',
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

  it('should display the entered text', async () => {
    render(<TextInput {...testProps} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('');
    await userEvent.type(input, 'test');
    expect(input).toHaveValue('test');
  });
});
