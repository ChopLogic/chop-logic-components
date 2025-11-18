import { AlertMode, IconName } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { AlertExample } from './Alert.example';

const meta: Meta<typeof AlertExample> = {
  argTypes: {
    title: {
      control: 'text',
      description: 'The main title of the alert',
    },
    message: {
      control: 'text',
      description: 'The detailed message content',
    },
    mode: {
      control: 'select',
      options: Object.values(AlertMode),
      description: 'The visual style and intent of the alert',
    },
    icon: {
      control: 'select',
      options: Object.values(IconName),
      description: 'Custom icon to display. Defaults to mode-appropriate icon if not specified',
    },
    autoClose: {
      control: 'boolean',
      description: 'Whether the alert should automatically close after delay',
    },
    autoCloseDelay: {
      control: 'number',
      description: 'Time in milliseconds before auto-closing (if autoClose is true)',
    },
    onClose: {
      action: 'closed',
      description: 'Callback function when alert is closed',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for custom styling',
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
    icon: IconName.CheckMark,
    autoClose: true,
    autoCloseDelay: 3000,
  },
};

export const WarningAlert: Story = {
  args: {
    title: 'Warning',
    message: 'Your storage is almost full. Consider cleaning up unused files.',
    mode: AlertMode.Warning,
    icon: IconName.Warning,
    autoClose: false,
  },
};

export const ErrorAlert: Story = {
  args: {
    title: 'Error',
    message:
      'Failed to connect to the server. Please check your internet connection and try again.',
    mode: AlertMode.Error,
    icon: IconName.Error,
    autoClose: false,
  },
};

export const LongMessage: Story = {
  args: {
    title: 'Terms and Conditions Update',
    message:
      'We have updated our terms and conditions to provide better clarity on data usage policies. These changes reflect our ongoing commitment to transparency and user privacy. Please review the updated documentation at your convenience.',
    mode: AlertMode.Info,
    autoClose: false,
  },
};
