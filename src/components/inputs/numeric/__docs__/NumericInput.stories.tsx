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
    defaultValue: 0,
    label: 'Enter the number:',
    name: 'number',
    id: 'number-input',
    required: false,
    disabled: false,
    errorMessage: 'Enter a number between -100 and 100',
    max: 100,
    min: -100,
    step: 1,
  },
};
