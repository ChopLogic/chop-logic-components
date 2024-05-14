import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';

const meta: Meta<typeof Example> = {
  title: 'TextInput',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    placeholder: 'Type here...',
    label: 'Enter your name:',
    name: 'name',
    id: 'name-input',
    valid: true,
    required: false,
  },
};
