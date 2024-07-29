import { SELECT_LANGUAGES } from '__mocks__/select-values';
import type { Meta, StoryObj } from '@storybook/react';

import SelectExample from './SelectExample';

const meta: Meta<typeof SelectExample> = {
  title: 'Inputs/Select',
  component: SelectExample,
};

export default meta;
type Story = StoryObj<typeof SelectExample>;

export const Default: Story = {
  args: {
    id: 'example-select',
    label: 'Select your language',
    values: SELECT_LANGUAGES,
    name: 'language',
    placeholder: 'Click to select',
    onSelectChange: (value) => console.log(`Selected ${value?.label}`),
    required: false,
    disabled: false,
  },
};
