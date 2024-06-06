import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';

const meta: Meta<typeof Example> = {
  title: 'MultiSelect',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    id: 'example-multiselect',
    name: 'languages',
    label: 'Select Languages',
    values: [
      { id: '1', label: 'English', selected: false },
      { id: '2', label: 'Spanish', selected: false },
      { id: '3', label: 'French', selected: false },
    ],
    placeholder: 'Select languages',
    required: true,
    disabled: false,
  },
};
