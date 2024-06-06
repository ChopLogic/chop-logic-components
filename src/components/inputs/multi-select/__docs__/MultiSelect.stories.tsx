import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';
import { MULTI_SELECT_VALUES } from '__mocks__/select-values';

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
    values: MULTI_SELECT_VALUES,
    placeholder: 'Select languages',
    required: true,
    disabled: false,
  },
};
