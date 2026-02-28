import { Checkbox, NumericInput, TextInput } from '@components/molecules';
import { Form } from '@components/organisms';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

describe('Form', () => {
  const testInitialValues = {
    firstName: 'John',
    lastName: 'Doe',
    age: 33,
    accepted: true,
  };

  const testProps = {
    id: 'form-id',
    className: 'form-class',
    style: { width: '500px' },
  };

  it('should not render Reset button is hasReset props is false', () => {
    render(
      <Form hasReset={false} {...testProps}>
        <TextInput name="firstName" label="First Name" />
        <TextInput name="lastName" label="Last Name" />
        <NumericInput name="age" label="Age" />
      </Form>,
    );
    expect(screen.queryByText('Reset')).not.toBeInTheDocument();
  });

  it('should call onSubmit handler', async () => {
    const mockSubmit = vi.fn();
    render(
      <Form onClickSubmit={mockSubmit} {...testProps}>
        <TextInput name="firstName" label="First Name" />
        <TextInput name="lastName" label="Last Name" />
        <NumericInput name="age" label="Age" />
      </Form>,
    );
    await userEvent.click(screen.getByText('Submit'));
    expect(mockSubmit).toHaveBeenCalledOnce();
  });

  it('should render initial values', () => {
    render(
      <Form initialValues={testInitialValues} {...testProps}>
        <TextInput name="firstName" label="First Name" />
        <TextInput name="lastName" label="Last Name" />
        <NumericInput name="age" label="Age" />
        <Checkbox name="accepted" label="Is Accepted" />
      </Form>,
    );

    const textInputs = screen.getAllByRole('textbox');
    expect(textInputs).toHaveLength(2);
    expect(textInputs[0]).toHaveValue(testInitialValues.firstName);
    expect(textInputs[1]).toHaveValue(testInitialValues.lastName);
    expect(screen.getByRole('spinbutton')).toHaveValue(testInitialValues.age);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('should accept custom values', async () => {
    render(
      <Form {...testProps}>
        <TextInput name="firstName" label="First Name" />
        <TextInput name="lastName" label="Last Name" />
        <NumericInput name="age" label="Age" />
        <Checkbox name="accepted" label="Is Accepted" />
      </Form>,
    );

    const textInputs = screen.getAllByRole('textbox');
    const numericInput = screen.getByRole('spinbutton');
    const checkboxInput = screen.getByRole('checkbox');

    await userEvent.type(textInputs[0] as HTMLElement, 'test1');
    await userEvent.type(textInputs[1] as HTMLElement, 'test2');
    await userEvent.type(numericInput, '55');
    await userEvent.click(checkboxInput);

    expect(textInputs[0]).toHaveValue('test1');
    expect(textInputs[1]).toHaveValue('test2');
    expect(numericInput).toHaveValue(55);
    expect(checkboxInput).toBeChecked();
  });

  it('should reset entered values to initial values', async () => {
    render(
      <Form initialValues={testInitialValues} {...testProps}>
        <TextInput name="firstName" label="First Name" />
        <TextInput name="lastName" label="Last Name" />
        <NumericInput name="age" label="Age" />
        <Checkbox name="accepted" label="Is Accepted" />
      </Form>,
    );

    const textInputs = screen.getAllByRole('textbox');
    const numericInput = screen.getByRole('spinbutton');
    const checkboxInput = screen.getByRole('checkbox');

    await userEvent.type(textInputs[0] as HTMLElement, 'test1');
    await userEvent.type(textInputs[1] as HTMLElement, 'test2');
    await userEvent.type(numericInput, '55');
    await userEvent.click(checkboxInput);

    await userEvent.click(screen.getByText('Reset'));

    expect(textInputs[0]).toHaveValue(testInitialValues.firstName);
    expect(textInputs[1]).toHaveValue(testInitialValues.lastName);
    expect(numericInput).toHaveValue(testInitialValues.age);
    expect(checkboxInput).toBeChecked();
  });
});
