import type { Meta, StoryObj } from '@storybook/react-vite';
import type { MultiSelectValue } from '@types';

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
    // Content
    label: {
      control: 'text',
      description: 'Label text displayed above the multi-select',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when no options are selected',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    options: {
      control: 'object',
      description: 'Array of available options for selection',
      table: {
        type: { summary: 'MultiSelectValue[]' },
        category: 'Content',
      },
    },
    defaultValue: {
      control: 'text',
      description: 'Default selected value(s)',
      table: {
        type: { summary: 'MultiSelectValue | MultiSelectValue[]' },
        category: 'Content',
      },
    },
    // State
    disabled: {
      control: 'boolean',
      description: 'Whether the multi-select is disabled',
      table: {
        type: { summary: 'boolean' },
        category: 'State',
      },
    },
    // Validation
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
      table: {
        type: { summary: 'boolean' },
        category: 'Validation',
      },
    },
    // Interaction
    onChange: {
      action: 'changed',
      description: 'Callback function called when selected values change',
      table: {
        type: { summary: '(value: MultiSelectValue | MultiSelectValue[]) => void' },
        category: 'Interaction',
      },
    },
    // Styling
    className: {
      control: 'text',
      description: 'Additional CSS class for custom styling',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
    style: {
      control: 'object',
      description: 'Inline styles for the search wrapper',
      table: {
        type: { summary: 'CSSProperties' },
        defaultValue: { summary: 'undefined' },
        category: 'Styling',
      },
    },
    // Identification
    id: {
      control: 'text',
      description: 'Unique identifier for the multi-select component',
      table: {
        type: { summary: 'string' },
        category: 'Identification',
      },
    },
    name: {
      control: 'text',
      description: 'Name attribute for form submission',
      table: {
        type: { summary: 'string' },
        category: 'Identification',
      },
    },
    // HTML attributes
    tabIndex: {
      control: 'number',
      description: 'Tab index for the search input',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
        category: 'HTML Attributes',
      },
    },
    title: {
      control: 'text',
      description: 'Title attribute for the search wrapper',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'HTML Attributes',
      },
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
