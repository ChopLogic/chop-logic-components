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
    name: 'age',
    label: 'Enter your age:',
    id: 'age-input',
    defaultValue: 0,
    max: 100,
    min: 0,
    step: 1,
    required: false,
    disabled: false,
    readOnly: false,
    hasSpinButtons: true,
    errorMessage: 'Enter a number between 1 and 99',
    validator: (age) => !!age && age >= 1 && age < 100,
    theme: 'light',
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
    },
  },
};
