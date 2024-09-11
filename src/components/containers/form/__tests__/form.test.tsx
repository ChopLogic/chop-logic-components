import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ChopLogicCheckbox, ChopLogicNumericInput, ChopLogicTextInput } from 'components/index';

import ChopLogicForm from '../Form';

describe('ChopLogicForm', () => {
  const testInitialValues = { firstName: 'John', lastName: 'Doe', age: 33, accepted: true };

  it('should match the snapshot', () => {
    const { asFragment } = render(
      <ChopLogicForm>
        <ChopLogicTextInput name='firstName' id='first-name' label='First Name' />
        <ChopLogicTextInput name='lastName' id='last-name' label='Last Name' />
        <ChopLogicNumericInput name='age' id='age' label='Age' />
      </ChopLogicForm>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render initial values', () => {
    render(
      <ChopLogicForm initialValues={testInitialValues}>
        <ChopLogicTextInput name='firstName' id='first-name' label='First Name' />
        <ChopLogicTextInput name='lastName' id='last-name' label='Last Name' />
        <ChopLogicNumericInput name='age' id='age' label='Age' />
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
});
