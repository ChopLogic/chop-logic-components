import { IconName } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import type Dialog from '../Dialog';
import { DialogExample } from './Dialog.example';

const meta: Meta<typeof Dialog> = {
  component: DialogExample,
  title: 'Organisms/Dialog',
  argTypes: {
    isOpened: {
      control: 'boolean',
      description: 'Controls whether the dialog is visible',
    },
    title: {
      control: 'text',
      description: 'Title displayed in the dialog header',
    },
    icon: {
      control: 'select',
      options: Object.values(IconName),
      description: 'Optional icon displayed next to the title',
    },
    onClose: {
      action: 'closed',
      description: 'Callback function called when dialog is requested to close',
    },
    children: {
      control: 'text',
      description: 'Content rendered inside the dialog body',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for custom styling',
    },
    id: {
      control: 'text',
      description: 'Unique identifier for the dialog',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Example: Story = {
  args: {
    isOpened: false,
    title: 'Please read this dialog',
    icon: IconName.Help,
  },
};
