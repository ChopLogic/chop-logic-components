import type { MultiSelectValue } from '@models';
import type { Meta, StoryObj } from '@storybook/react-vite';

import type MultiSelect from '../MultiSelect';
import { MultiSelectExample } from './MultiSelect.example';

const MULTI_SELECT_VALUES: MultiSelectValue[] = [
  { id: '57b5a856-bc4b-4c2f-8295-9f44434fafc7', label: 'English', selected: false },
  { id: '583e8b60-0177-4e38-a423-4b1d5d0a2236', label: 'Spanish', selected: false },
  { id: 'b20bea7b-8172-4d12-b172-d5feac02d863', label: 'French', selected: false },
  { id: '641fc722-af5a-4426-8f8a-1566cc492b91', label: 'German', selected: false },
];

const meta: Meta<typeof MultiSelect> = {
  component: MultiSelectExample,
  title: 'Molecules/MultiSelect',
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for the multi-select component',
    },
    name: {
      control: 'text',
      description: 'Name attribute for form submission',
    },
    label: {
      control: 'text',
      description: 'Label text displayed above the multi-select',
    },
    options: {
      control: 'object',
      description: 'Array of available options for selection',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when no options are selected',
    },
    onChange: {
      action: 'changed',
      description: 'Callback function called when selected values change',
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the multi-select is disabled',
    },
    defaultValue: {
      control: 'text',
      description: 'Default selected value(s)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for custom styling',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

export const Example: Story = {
  args: {
    id: 'example-multiselect',
    name: 'languages',
    label: 'Select Languages',
    options: MULTI_SELECT_VALUES,
    placeholder: 'Select languages',
    onChange: (values) => console.log(values),
    required: true,
    disabled: false,
  },
};
