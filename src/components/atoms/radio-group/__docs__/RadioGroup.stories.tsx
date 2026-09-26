import type { Meta, StoryObj } from '@storybook/react-vite';

import type RadioGroup from '../RadioGroup';
import { RadioGroupExample } from './RadioGroup.example';

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroupExample,
  title: 'Atoms/RadioGroup',
  argTypes: {
    // Content
    label: {
      control: 'text',
      description: 'Accessible label for the radio group',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    options: {
      control: 'object',
      description: 'Array of options to display, each with a value, label, and optional disabled',
      table: {
        type: { summary: 'RadioGroupOption[]' },
        category: 'Content',
      },
    },
    // Styling
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Layout orientation of the options',
      table: {
        type: { summary: "'vertical' | 'horizontal'" },
        defaultValue: { summary: 'vertical' },
        category: 'Styling',
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for the radio group wrapper',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'Styling',
      },
    },
    style: {
      control: 'object',
      description: 'Inline styles for the radio group wrapper',
      table: {
        type: { summary: 'CSSProperties' },
        defaultValue: { summary: 'undefined' },
        category: 'Styling',
      },
    },
    // State
    defaultValue: {
      control: 'text',
      description: 'Initial selected value (stateful mode)',
      table: {
        type: { summary: 'string' },
        category: 'State',
      },
    },
    value: {
      control: 'text',
      description: 'The externally controlled selected value (used when stateless is true)',
      table: {
        type: { summary: 'string' },
        category: 'State',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the entire group is disabled',
      table: {
        type: { summary: 'boolean' },
        category: 'State',
      },
    },
    isLoading: {
      control: 'boolean',
      description: 'Whether the group is in a loading state',
      table: {
        type: { summary: 'boolean' },
        category: 'State',
      },
    },
    // Behavior
    stateless: {
      control: 'boolean',
      description: 'When true, the group is stateless and controlled externally via the value prop',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    onChange: {
      description: 'Callback when the selection changes, receives the selected value',
      table: {
        type: { summary: '(value: string) => void' },
        category: 'Behavior',
      },
    },
    // Validation
    required: {
      control: 'boolean',
      description: 'Whether a selection is required',
      table: {
        type: { summary: 'boolean' },
        category: 'Validation',
      },
    },
    // Identification
    name: {
      control: 'text',
      description: 'Name attribute shared by the radio inputs',
      table: {
        type: { summary: 'string' },
        category: 'Identification',
      },
    },
    id: {
      control: 'text',
      description: 'The unique ID for the group (auto-generated from name if not provided)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'Identification',
      },
    },
    tabIndex: {
      control: 'number',
      description: 'Tab index for keyboard navigation',
      table: {
        type: { summary: 'number' },
        category: 'HTML Attributes',
      },
    },
    title: {
      control: 'text',
      description: 'Tooltip text shown on hover',
      table: {
        type: { summary: 'string' },
        category: 'HTML Attributes',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const SIZE_OPTIONS = [
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
];

export const Default: Story = {
  args: {
    name: 'size',
    label: 'Select a size',
    options: SIZE_OPTIONS,
    orientation: 'vertical',
    defaultValue: 'medium',
    disabled: false,
    required: false,
  },
};

export const Horizontal: Story = {
  args: {
    name: 'size',
    label: 'Select a size',
    options: SIZE_OPTIONS,
    orientation: 'horizontal',
    defaultValue: 'small',
  },
};

export const WithDefaultValue: Story = {
  args: {
    name: 'size',
    label: 'Select a size',
    options: SIZE_OPTIONS,
    defaultValue: 'large',
  },
};

export const Disabled: Story = {
  args: {
    name: 'size',
    label: 'Select a size',
    options: SIZE_OPTIONS,
    defaultValue: 'medium',
    disabled: true,
  },
};

export const IndividualDisabledOption: Story = {
  args: {
    name: 'size',
    label: 'Select a size',
    options: [
      { value: 'small', label: 'Small' },
      { value: 'medium', label: 'Medium', disabled: true },
      { value: 'large', label: 'Large' },
    ],
    defaultValue: 'small',
  },
};
