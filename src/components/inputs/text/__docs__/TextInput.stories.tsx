import type { Meta, StoryObj } from '@storybook/react';

import TextInputExample from './TextInputExample';

const meta: Meta<typeof TextInputExample> = {
  title: 'Inputs/TextInput',
  component: TextInputExample,
};

export default meta;
type Story = StoryObj<typeof TextInputExample>;

export const Default: Story = {
  args: {
    placeholder: 'Type here...',
    label: 'Enter the formula:',
    name: 'formula',
    id: 'formula-input',
    required: false,
    disabled: false,
    hasClearButton: true,
    errorMessage: 'Only latin letters are allowed',
    validator: { regexp: '^[A-Za-z ]+$' },
  },
};
