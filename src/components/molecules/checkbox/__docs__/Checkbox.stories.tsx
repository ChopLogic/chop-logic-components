import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

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
    stateless: {
      control: 'boolean',
      description:
        'When true, the checkbox is stateless and controlled externally via the checked prop',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    checked: {
      control: 'boolean',
      description: 'The external checked state (used when stateless is true)',
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
};

export const Stateless: Story = {
  args: {
    id: 'newsletter-checkbox',
    name: 'subscribeNewsletter',
    label: 'Subscribe to newsletter',
    stateless: true,
    checked: true,
    required: false,
    disabled: false,
    noLabel: false,
    iconPosition: 'left',
  },
  render: (args) => {
    const [isSubscribed, setIsSubscribed] = useState(args.checked ?? false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsSubscribed(event.target.checked);
    };

    return <CheckboxExample {...args} checked={isSubscribed} onChange={handleChange} />;
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
