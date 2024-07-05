import type { Meta, StoryObj } from '@storybook/react';
import CheckboxExample from './CheckboxExample';

const meta: Meta<typeof CheckboxExample> = {
  title: 'Inputs/Checkbox',
  component: CheckboxExample,
};

export default meta;
type Story = StoryObj<typeof CheckboxExample>;

export const Default: Story = {
  args: {
    id: 'accept-terms-checkbox',
    name: 'isTermsAccepted',
    label: 'Accept Terms and Conditions',
    required: true,
    disabled: false,
    isLabelHidden: false,
  },
};
