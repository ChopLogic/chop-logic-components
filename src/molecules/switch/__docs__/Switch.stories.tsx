import type { Meta, StoryObj } from '@storybook/react-vite';

import { SwitchExample } from './Switch.example';

const meta: Meta<typeof SwitchExample> = {
  title: 'Molecules/Switch',
  component: SwitchExample,
  argTypes: {
    // Content
    label: {
      control: 'text',
      description: 'Label for the switch - should not change with state',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    value: {
      control: 'text',
      description: 'The value of the switch when checked, used for form submission',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    hasIndicator: {
      control: 'boolean',
      description: 'Whether to show an indicator inside the switch thumb',
      table: {
        type: { summary: 'boolean' },
        category: 'Content',
      },
    },
    // State
    checked: {
      control: 'boolean',
      description: 'The current state of the switch',
      table: {
        type: { summary: 'boolean' },
        category: 'State',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
      table: {
        type: { summary: 'boolean' },
        category: 'State',
      },
    },
    // Interaction
    onChange: {
      action: 'changed',
      description: 'Callback function when switch state changes',
      table: {
        type: { summary: '(checked: boolean) => void' },
        category: 'Interaction',
      },
    },
    // Styling
    className: {
      control: 'text',
      description: 'Additional class name for custom styling',
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
      description: 'Unique identifier for the switch',
      table: {
        type: { summary: 'string' },
        category: 'Identification',
      },
    },
    name: {
      control: 'text',
      description: 'The name of the switch, used for form submission',
      table: {
        type: { summary: 'string' },
        category: 'Identification',
      },
    },
  },
  args: {
    label: 'Enable notifications',
    checked: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof SwitchExample>;

export const Default: Story = {
  args: {
    label: 'Dark mode',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Airplane mode',
    disabled: true,
  },
};

export const WithIndicator: Story = {
  args: {
    label: 'Bluetooth',
    checked: true,
    hasIndicator: true,
  },
};
