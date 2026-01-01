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
  argTypes: {
    // Content
    label: {
      control: 'text',
      description: 'Label text displayed above the select',
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
        type: { summary: 'SelectValue[]' },
        category: 'Content',
      },
    },
    defaultValue: {
      control: 'text',
      description: 'Default selected value(s)',
      table: {
        type: { summary: 'SelectValue' },
        category: 'Content',
      },
    },
    // State
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
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
      description: 'Callback function called when selected value changes',
      table: {
        type: { summary: '(value: SelectValue) => void' },
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
      description: 'Unique identifier for the select component',
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
