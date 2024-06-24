import type { Meta, StoryObj } from '@storybook/react';
import Example from './CheckboxExample';

const meta: Meta<typeof Example> = {
  title: 'Checkbox',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

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
