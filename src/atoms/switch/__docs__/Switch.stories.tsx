import type { Meta, StoryObj } from '@storybook/react-vite';

import { SwitchExample } from './Switch.example';

const meta: Meta<typeof SwitchExample> = {
  title: 'Atoms/Switch',
  component: SwitchExample,
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'The current state of the switch',
    },
    onChange: {
      action: 'changed',
      description: 'Callback function when switch state changes',
    },
    label: {
      control: 'text',
      description: 'Label for the switch - should not change with state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
    },
    className: {
      control: 'text',
      description: 'Additional class name for custom styling',
    },
    id: {
      control: 'text',
      description: 'Unique identifier for the switch',
    },
    name: {
      control: 'text',
      description: 'The name of the switch, used for form submission',
    },
    value: {
      control: 'text',
      description: 'The value of the switch when checked, used for form submission',
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

export const DisabledChecked: Story = {
  args: {
    label: 'Bluetooth',
    checked: true,
    disabled: true,
  },
};

export const WithFormAttributes: Story = {
  args: {
    label: 'Email notifications',
    name: 'notifications',
    value: 'email-on',
    id: 'email-switch',
  },
};

export const LongLabel: Story = {
  args: {
    label: 'Enable automatic software updates and security patches',
  },
};
