import type { Meta, StoryObj } from '@storybook/react-vite';

import type Checkbox from '../Checkbox';
import { CheckboxExample } from './Checkbox.example';

const meta: Meta<typeof Checkbox> = {
  component: CheckboxExample,
  title: 'Molecules/Checkbox',
  argTypes: {
    // Content
    label: {
      control: 'text',
      description: 'The label text displayed with the checkbox',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    // Styling
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of the icon relative to the label text',
      table: {
        type: { summary: "'left' | 'right'" },
        defaultValue: { summary: 'left' },
        category: 'Styling',
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for the search wrapper',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
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
    // State
    defaultChecked: {
      control: 'boolean',
      description: 'Initial checked state of the checkbox',
      table: {
        type: { summary: 'boolean' },
        category: 'State',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
      table: {
        type: { summary: 'boolean' },
        category: 'State',
      },
    },
    // Behavior
    noLabel: {
      control: 'boolean',
      description: 'Whether to hide the label visually (still accessible to screen readers)',
      table: {
        type: { summary: 'boolean' },
        category: 'Behavior',
      },
    },
    onChange: {
      description: 'Callback function when the checked state changes',
      table: {
        type: { summary: '(checked: boolean) => void' },
        category: 'Behavior',
      },
    },
    // Validation
    required: {
      control: 'boolean',
      description: 'Whether the checkbox is required',
      table: {
        type: { summary: 'boolean' },
        category: 'Validation',
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
    id: {
      control: 'text',
      description: 'The unique ID for the search input (auto-generated if not provided)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'HTML Attributes',
      },
    },
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
type Story = StoryObj<typeof Checkbox>;

export const LeftIconCheckbox: Story = {
  args: {
    id: 'accept-terms-checkbox',
    name: 'isTermsAccepted',
    label: 'Accept Terms and Conditions',
    required: true,
    disabled: false,
    noLabel: false,
    defaultChecked: false,
    iconPosition: 'left',
  },
  argTypes: {
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
  },
};

export const RightIconCheckbox: Story = {
  args: {
    id: 'accept-terms-checkbox',
    name: 'isTermsAccepted',
    label: 'Accept Terms and Conditions',
    required: false,
    disabled: false,
    noLabel: false,
    defaultChecked: false,
    iconPosition: 'right',
  },
  argTypes: {
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
  },
};

export const NoLabelCheckbox: Story = {
  args: {
    id: 'accept-terms-checkbox',
    name: 'isTermsAccepted',
    label: 'Accept Terms and Conditions',
    required: false,
    disabled: false,
    noLabel: true,
    defaultChecked: true,
  },
};
