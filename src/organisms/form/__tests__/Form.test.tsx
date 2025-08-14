import { ChopLogicCheckbox, ChopLogicTextInput, NumericInput } from '@molecules';
import { ChopLogicForm } from '@organisms';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

describe('ChopLogicForm', () => {
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
      <ChopLogicForm hasReset={false} {...testProps}>
        <ChopLogicTextInput name='firstName' id='first-name' label='First Name' />
        <ChopLogicTextInput name='lastName' id='last-name' label='Last Name' />
        <NumericInput name='age' id='age' label='Age' />
      </ChopLogicForm>,
    );
    expect(screen.queryByText('Reset')).not.toBeInTheDocument();
  });

  it('should call onSubmit handler', async () => {
    const mockSubmit = vi.fn();
    render(
      <ChopLogicForm onClickSubmit={mockSubmit} {...testProps}>
        <ChopLogicTextInput name='firstName' id='first-name' label='First Name' />
        <ChopLogicTextInput name='lastName' id='last-name' label='Last Name' />
        <NumericInput name='age' id='age' label='Age' />
      </ChopLogicForm>,
    );
    await userEvent.click(screen.getByText('Submit'));
    expect(mockSubmit).toHaveBeenCalledOnce();
  });

  it('should render initial values', () => {
    render(
      <ChopLogicForm initialValues={testInitialValues} {...testProps}>
        <ChopLogicTextInput name='firstName' id='first-name' label='First Name' />
        <ChopLogicTextInput name='lastName' id='last-name' label='Last Name' />
        <NumericInput name='age' id='age' label='Age' />
        <ChopLogicCheckbox name='accepted' id='accepted' label='Is Accepted' />
      </ChopLogicForm>,
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
      <ChopLogicForm {...testProps}>
        <ChopLogicTextInput name='firstName' id='first-name' label='First Name' />
        <ChopLogicTextInput name='lastName' id='last-name' label='Last Name' />
        <NumericInput name='age' id='age' label='Age' />
        <ChopLogicCheckbox name='accepted' id='accepted' label='Is Accepted' />
      </ChopLogicForm>,
    );

    const textInputs = screen.getAllByRole('textbox');
    const numericInput = screen.getByRole('spinbutton');
    const checkboxInput = screen.getByRole('checkbox');

    await userEvent.type(textInputs[0], 'test1');
    await userEvent.type(textInputs[1], 'test2');
    await userEvent.type(numericInput, '55');
    await userEvent.click(checkboxInput);

    expect(textInputs[0]).toHaveValue('test1');
    expect(textInputs[1]).toHaveValue('test2');
    expect(numericInput).toHaveValue(55);
    expect(checkboxInput).toBeChecked();
  });

  it('should reset entered values to initial values', async () => {
    render(
      <ChopLogicForm initialValues={testInitialValues} {...testProps}>
        <ChopLogicTextInput name='firstName' id='first-name' label='First Name' />
        <ChopLogicTextInput name='lastName' id='last-name' label='Last Name' />
        <NumericInput name='age' id='age' label='Age' />
        <ChopLogicCheckbox name='accepted' id='accepted' label='Is Accepted' />
      </ChopLogicForm>,
    );

    const textInputs = screen.getAllByRole('textbox');
    const numericInput = screen.getByRole('spinbutton');
    const checkboxInput = screen.getByRole('checkbox');

    await userEvent.type(textInputs[0], 'test1');
    await userEvent.type(textInputs[1], 'test2');
    await userEvent.type(numericInput, '55');
    await userEvent.click(checkboxInput);

    await userEvent.click(screen.getByText('Reset'));

    expect(textInputs[0]).toHaveValue(testInitialValues.firstName);
    expect(textInputs[1]).toHaveValue(testInitialValues.lastName);
    expect(numericInput).toHaveValue(testInitialValues.age);
    expect(checkboxInput).toBeChecked();
  });
});
