import { AlertMode, IconName } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { AlertExample } from './Alert.example';

const meta: Meta<typeof AlertExample> = {
  argTypes: {
    // Content
    title: {
      control: 'text',
      description: 'The main title of the alert',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    message: {
      control: 'text',
      description: 'The detailed message content',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    icon: {
      control: 'select',
      options: Object.values(IconName),
      description: 'Custom icon to display. Defaults to mode-appropriate icon if not specified',
      table: {
        type: { summary: 'IconName' },
        category: 'Content',
      },
    },
    // Styling
    mode: {
      control: 'select',
      options: Object.values(AlertMode),
      description: 'The visual style and intent of the alert',
      table: {
        type: { summary: 'AlertMode' },
        defaultValue: { summary: 'AlertMode.Info' },
        category: 'Styling',
      },
    },
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
    // Behavior
    autoClose: {
      control: 'boolean',
      description: 'Whether the alert should automatically close after delay',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Behavior',
      },
    },
    autoCloseDelay: {
      control: 'number',
      description: 'Time in milliseconds before auto-closing (if autoClose is true)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '3000' },
        category: 'Behavior',
      },
    },
    // Interaction
    onClose: {
      action: 'closed',
      description: 'Callback function when alert is closed',
      table: {
        type: { summary: '() => void' },
        category: 'Interaction',
      },
    },
    isOpened: {
      control: 'boolean',
      description: 'Controls the visibility of the alert',
      table: {
        type: { summary: 'boolean' },
        category: 'Interaction',
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
  },
  args: {
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    mode: AlertMode.Info,
    autoClose: true,
    autoCloseDelay: 3000,
  },
  component: AlertExample,
  title: 'Molecules/Alert',
};

export default meta;
type Story = StoryObj<typeof AlertExample>;

export const Info: Story = {
  args: {
    title: 'Information',
    message: 'This is an informational message about recent updates to the system.',
    mode: AlertMode.Info,
    autoClose: true,
    autoCloseDelay: 4000,
  },
};

export const SuccessAlert: Story = {
  args: {
    title: 'Success!',
    message: 'Your profile has been updated successfully.',
    mode: AlertMode.Success,
    autoClose: true,
    autoCloseDelay: 3000,
  },
};

export const WarningAlert: Story = {
  args: {
    title: 'Warning',
    mode: AlertMode.Warning,
    message: 'Your storage is almost full. Consider cleaning up unused files.',
    autoClose: false,
  },
};

export const ErrorAlert: Story = {
  args: {
    title: 'Error',
    mode: AlertMode.Error,
    message:
      'Failed to connect to the server. Please check your internet connection and try again.',
    autoClose: false,
  },
};

export const LongMessage: Story = {
  args: {
    title: 'Usage Terms Update',
    message:
      'We have updated our terms and conditions to provide better clarity on data usage policies. These changes reflect our ongoing commitment to transparency and user privacy. Please review the updated documentation at your convenience.',
    mode: AlertMode.Help,
    autoClose: false,
  },
};
