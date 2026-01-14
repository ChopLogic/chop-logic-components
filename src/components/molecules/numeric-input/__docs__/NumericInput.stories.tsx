import type { Meta, StoryObj } from '@storybook/react-vite';

import { NumericInputExample } from './NumericInput.example';

const meta: Meta<typeof NumericInputExample> = {
  component: NumericInputExample,
  title: 'Molecules/NumericInput',
  argTypes: {
    // Content
    label: {
      control: 'text',
      description: 'Label text displayed above the numeric input',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    errorMessage: {
      control: 'text',
      description: 'Error message displayed when validation fails',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    // Behavior
    defaultValue: {
      control: 'number',
      description: 'Initial numeric value',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
        category: 'Behavior',
      },
    },
    min: {
      control: 'number',
      description: 'Minimum allowed numeric value',
      table: {
        type: { summary: 'number' },
        category: 'Behavior',
      },
    },
    max: {
      control: 'number',
      description: 'Maximum allowed numeric value',
      table: {
        type: { summary: 'number' },
        category: 'Behavior',
      },
    },
    step: {
      control: 'number',
      description: 'Increment/decrement step value',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
        category: 'Behavior',
      },
    },
    hasSpinButtons: {
      control: 'boolean',
      description: 'Whether to display spinner buttons for increment/decrement',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Behavior',
      },
    },
    controlled: {
      control: 'boolean',
      description: 'When true, the input is controlled externally via the value prop',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    value: {
      control: 'number',
      description: 'The controlled numeric value (used when controlled is true)',
      table: {
        type: { summary: 'number' },
        category: 'Behavior',
      },
    },
    // State
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
      table: {
        type: { summary: 'boolean' },
        category: 'State',
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the input is read-only',
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
    validator: {
      control: 'object',
      description: 'Custom validation function or object',
      table: {
        type: { summary: '(value: number) => boolean' },
        category: 'Validation',
      },
    },
    // Identification
    id: {
      control: 'text',
      description: 'Unique identifier for the input',
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
    // Interaction
    onChange: {
      action: 'changed',
      description: 'Callback function called when input value changes',
      table: {
        type: { summary: 'ChangeEventHandler<HTMLInputElement>' },
        category: 'Interaction',
      },
    },
    onBlur: {
      action: 'blurred',
      description: 'Callback function triggered when the input loses focus',
      table: {
        type: { summary: 'FocusEventHandler<HTMLInputElement>' },
        category: 'Interaction',
      },
    },
    onFocus: {
      action: 'focused',
      description: 'Callback function triggered when the input receives focus',
      table: {
        type: { summary: 'FocusEventHandler<HTMLInputElement>' },
        category: 'Interaction',
      },
    },
    onIncrement: {
      action: 'incremented',
      description: 'Callback function triggered when the increment button is clicked',
      table: {
        type: { summary: '(value?: number) => void' },
        category: 'Interaction',
      },
    },
    onDecrement: {
      action: 'decremented',
      description: 'Callback function triggered when the decrement button is clicked',
      table: {
        type: { summary: '(value?: number) => void' },
        category: 'Interaction',
      },
    },
    title: {
      control: 'text',
      description: 'Tooltip text shown on hover',
      table: {
        type: { summary: 'string' },
        category: 'Interaction',
      },
    },
    // Styling
    className: {
      control: 'text',
      description: 'Additional CSS class names for custom styling',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
    style: {
      control: 'object',
      description: 'Inline CSS styles to apply to the input',
      table: {
        type: { summary: 'CSSProperties' },
        category: 'Styling',
      },
    },
    // Accessibility
    tabIndex: {
      control: 'number',
      description: 'Tab index for keyboard navigation',
      table: {
        type: { summary: 'number' },
        category: 'Accessibility',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NumericInputExample>;

export const Example: Story = {
  args: {
    name: 'age',
    label: 'Enter your age:',
    id: 'age-input',
    defaultValue: 0,
    max: 100,
    min: 0,
    step: 1,
    required: false,
    disabled: false,
    readOnly: false,
    hasSpinButtons: true,
    errorMessage: 'Enter a number between 1 and 99',
    validator: (age) => !!age && age >= 1 && age < 100,
  },
};
