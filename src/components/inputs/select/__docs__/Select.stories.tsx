import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';
import { SelectValue } from '../Select';

const meta: Meta<typeof Example> = {
  title: 'Select',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

const SELECT_VALUES: SelectValue[] = [
  {
    id: '57b5a856-bc4b-4c2f-8295-9f44434fafc7',
    label: 'English',
  },
  {
    id: 'b4b08a09-e287-400b-ba65-afd6ae1f6fd7',
    label: 'Russian',
  },
  {
    id: '641fc722-af5a-4426-8f8a-1566cc492b91',
    label: 'German',
  },
];

export const Default: Story = {
  args: {
    id: 'example-select',
    label: 'Select your language',
    values: SELECT_VALUES,
    name: 'language',
    placeholder: 'Click to select',
    onSelect: () => console.log('Selected'),
  },
};
