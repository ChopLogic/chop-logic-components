import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import ChopLogicForm from 'components/containers/form/Form';

import NumericInput from '../NumericInput';

describe('NumericInput', () => {
  const testProps = {
    id: 'numeric-input',
    name: 'quantity',
    label: 'Quantity',
    style: { width: '500px' },
  };

  it('should match the snapshot', () => {
    const { asFragment } = render(<NumericInput {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with default props', () => {
    render(<NumericInput {...testProps} />);

    // Check if the label is rendered
    expect(screen.getByText(/Quantity/i)).toBeInTheDocument();

    // Check if the input is rendered
    const input = screen.getByRole('spinbutton');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'number');
  });

  it('displays the correct default value', () => {
    render(<NumericInput {...testProps} defaultValue={5} />);

    const input = screen.getByRole('spinbutton');
    expect(input).toHaveValue(5);
  });

  it('updates value when typing', () => {
    const handleChange = vi.fn();
    render(<NumericInput {...testProps} onChange={handleChange} />);

    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '10' } });

    expect(input).toHaveValue(10);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('applies disabled state correctly', () => {
    render(<NumericInput {...testProps} disabled />);

    const input = screen.getByRole('spinbutton');
    expect(input).toBeDisabled();
  });

  it('displays error message', () => {
    render(<NumericInput {...testProps} errorMessage='Invalid input' />);

    expect(screen.getByText(/Invalid input/i)).toBeInTheDocument();
  });

  it('shows required label', () => {
    render(<NumericInput {...testProps} required />);

    expect(screen.getByText('*')).toBeInTheDocument();
    expect(screen.getByRole('spinbutton')).toBeRequired();
  });

  it('handles min and max constraints', () => {
    render(<NumericInput {...testProps} min={1} max={10} />);

    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '-1' } });
    expect(input).toHaveValue(-1);
    expect(input).toBeInvalid();

    fireEvent.change(input, { target: { value: '11' } });
    expect(input).toHaveValue(11);
    expect(input).toBeInvalid();
  });

  it('does not allow non-numeric input', () => {
    render(<NumericInput {...testProps} />);

    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: 'abc' } });

    expect(input).toHaveValue(0); // If non-numeric input is entered, it should revert to 0.
  });

  it('should respect step increment', () => {
    render(<NumericInput {...testProps} step={2} defaultValue={0} />);

    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '4' } });

    expect(input).toHaveValue(4);
  });

  it('should allow step increment using custom spin buttons', async () => {
    render(<NumericInput {...testProps} step={3} defaultValue={0} />);

    await userEvent.click(screen.getByLabelText(`Increment value for ${testProps.label}`));
    await userEvent.click(screen.getByLabelText(`Increment value for ${testProps.label}`));

    expect(screen.getByRole('spinbutton')).toHaveValue(6);
  });

  it('should allow step decrement using custom spin buttons', async () => {
    render(<NumericInput {...testProps} step={5} defaultValue={0} />);

    await userEvent.click(screen.getByLabelText(`Decrement value for ${testProps.label}`));
    await userEvent.click(screen.getByLabelText(`Decrement value for ${testProps.label}`));

    expect(screen.getByRole('spinbutton')).toHaveValue(-10);
  });

  it('should call onSpinButtonClick', async () => {
    const mockedCallback = vi.fn();
    render(<NumericInput {...testProps} onSpinButtonClick={mockedCallback} />);

    await userEvent.click(screen.getByLabelText(`Increment value for ${testProps.label}`));
    await userEvent.click(screen.getByLabelText(`Decrement value for ${testProps.label}`));

    expect(mockedCallback).toHaveBeenCalledTimes(2);
  });

  it('should take an initial value from the form context', async () => {
    render(
      <ChopLogicForm initialValues={{ quantity: 13 }}>
        <NumericInput {...testProps} />
      </ChopLogicForm>,
    );
    const input = screen.getByRole('spinbutton');
    expect(input).toHaveValue(13);
  });
});
