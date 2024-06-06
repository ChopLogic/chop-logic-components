import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';
import { SELECT_LANGUAGES } from '__mocks__/select-values';

const meta: Meta<typeof Example> = {
  title: 'Select',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    id: 'example-select',
    label: 'Select your language',
    values: SELECT_LANGUAGES,
    name: 'language',
    placeholder: 'Click to select',
    onSelect: () => console.log('Selected'),
    required: false,
    disabled: false,
  },
};
