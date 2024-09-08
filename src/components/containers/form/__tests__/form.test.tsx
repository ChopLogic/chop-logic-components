import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ChopLogicNumericInput, ChopLogicTextInput } from 'components/index';

import ChopLogicForm from '../Form';

describe('ChopLogicForm', () => {
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
});
