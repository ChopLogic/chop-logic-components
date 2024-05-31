import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';

const meta: Meta<typeof Example> = {
  title: 'Checkbox',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    id: 'example-checkbox',
    name: 'example',
    label: 'Accept Terms and Conditions',
    required: true,
    disabled: false,
    isLabelHidden: false,
    labelPosition: 'right',
  },
};
