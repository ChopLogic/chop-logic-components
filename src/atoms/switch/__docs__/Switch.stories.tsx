import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import Switch from '../Switch';

const SwitchWithState = (args: any) => {
  const [checked, setChecked] = useState(args.checked);
  return <Switch {...args} checked={checked} onChange={setChecked} />;
};

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switch',
  component: Switch,
  tags: ['autodocs'],
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
  parameters: {
    docs: {
      description: {
        component: `
# Switch Component

An accessible switch component that follows WAI-ARIA switch pattern.

**Keyboard Interaction:**
- **Space**: Toggles the switch
- **Enter**: Toggles the switch

**Accessibility Features:**
- Role "switch" with proper aria-checked states
- Screen reader announcements for state changes
- Focus management and visible focus indicators
- Support for high contrast and reduced motion preferences
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: SwitchWithState,
  args: {
    label: 'Wi-Fi',
  },
};

export const Checked: Story = {
  render: SwitchWithState,
  args: {
    label: 'Dark mode',
    checked: true,
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
  render: SwitchWithState,
  args: {
    label: 'Email notifications',
    name: 'notifications',
    value: 'email-on',
    id: 'email-switch',
  },
};

export const LongLabel: Story = {
  render: SwitchWithState,
  args: {
    label: 'Enable automatic software updates and security patches',
  },
};
