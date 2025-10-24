import type { SelectValue } from '@models';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { SelectExample } from './Select.example';

const SELECT_LANGUAGES: SelectValue[] = [
  { id: '57b5a856-bc4b-4c2f-8295-9f44434fafc7', label: 'English' },
  { id: 'b4b08a09-e287-400b-ba65-afd6ae1f6fd7', label: 'Russian' },
  { id: '641fc722-af5a-4426-8f8a-1566cc492b91', label: 'German' },
];

const meta: Meta<typeof SelectExample> = {
  component: SelectExample,
  title: 'Molecules/Select',
};

export default meta;
type Story = StoryObj<typeof SelectExample>;

export const Example: Story = {
  args: {
    id: 'example-select',
    label: 'Select your language',
    options: SELECT_LANGUAGES,
    name: 'language',
    placeholder: 'Select your language',
    onChange: (value) => console.log(value),
    required: false,
    disabled: false,
  },
};
