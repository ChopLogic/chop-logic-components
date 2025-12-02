import type { Meta, StoryObj } from '@storybook/react-vite';

import { TextInputExample } from './TextInput.example';

const meta: Meta<typeof TextInputExample> = {
  component: TextInputExample,
  title: 'Molecules/TextInput',
  argTypes: {
    // Content
    label: {
      control: 'text',
      description: 'Label text displayed above the input',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when input is empty',
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
    type: {
      control: 'select',
      options: ['text', 'email', 'password'],
      description: 'Input type attribute',
      table: {
        type: { summary: "'text' | 'email' | 'password'" },
        defaultValue: { summary: 'text' },
        category: 'Behavior',
      },
    },
    clearable: {
      control: 'boolean',
      description: 'Whether to show a clear button when input has value',
      table: {
        type: { summary: 'boolean' },
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
      description: 'Custom validation function or regex pattern',
      table: {
        type: { summary: '(value: string) => boolean | { regexp: string }' },
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
    // Content - Additional
    defaultValue: {
      control: 'text',
      description: 'Default value for the input field',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    // Behavior - Additional
    maxLength: {
      control: 'number',
      description: 'Maximum number of characters allowed in the input',
      table: {
        type: { summary: 'number' },
        category: 'Behavior',
      },
    },
    autoComplete: {
      control: 'text',
      description: 'HTML autocomplete attribute value',
      table: {
        type: { summary: 'HTMLInputAutoCompleteAttribute' },
        category: 'Behavior',
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
    onClear: {
      action: 'cleared',
      description: 'Callback function triggered when the clear button is clicked',
      table: {
        type: { summary: '() => void' },
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
type Story = StoryObj<typeof TextInputExample>;

export const DefaultTextInput: Story = {
  args: {
    placeholder: 'Type here...',
    label: 'Enter the formula',
    name: 'formula',
    id: 'formula-input',
    type: 'text',
    required: false,
    disabled: false,
    clearable: true,
    errorMessage: 'Only latin letters are allowed',
    validator: { regexp: '^[A-Za-z ]+$' },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password'],
    },
    validator: { control: 'object' },
  },
};

export const PasswordInput: Story = {
  args: {
    placeholder: 'Enter your password',
    label: 'Password',
    name: 'pwd',
    id: 'pwd-input',
    type: 'password',
    required: true,
    disabled: false,
    clearable: false,
    errorMessage: 'Your password should contain at least 6 characters',
    validator: (input) => input.length > 6,
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password'],
    },
    validator: { control: 'object' },
  },
};

export const EmailInput: Story = {
  args: {
    placeholder: 'Enter your email',
    label: 'Email',
    name: 'email',
    id: 'email-input',
    type: 'email',
    required: true,
    disabled: false,
    clearable: true,
    errorMessage: 'This is not a valid email',
    validator: { regexp: `^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$` },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password'],
    },
    validator: { control: 'object' },
  },
};
