import type { Meta, StoryObj } from '@storybook/react';

import NumericInputExample from './NumericInputExample';

const meta: Meta<typeof NumericInputExample> = {
  title: 'Inputs/NumericInput',
  component: NumericInputExample,
};

export default meta;
type Story = StoryObj<typeof NumericInputExample>;

export const Default: Story = {
  args: {
    placeholder: '0',
    label: 'Enter the number:',
    name: 'number',
    id: 'number-input',
    valid: true,
    required: false,
    disabled: false,
    errorMessage: 'Cannot parse the entered number',
    max: 1000,
    min: -1000,
    step: 1,
  },
};
