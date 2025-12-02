import { IconName } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import type Dialog from '../Dialog';
import { DialogExample } from './Dialog.example';

const meta: Meta<typeof Dialog> = {
  component: DialogExample,
  title: 'Organisms/Dialog',
  argTypes: {
    // State
    isOpened: {
      control: 'boolean',
      description: 'Controls whether the dialog is visible',
      table: {
        type: { summary: 'boolean' },
        category: 'State',
      },
    },
    // Content
    title: {
      control: 'text',
      description: 'Title displayed in the dialog header',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    children: {
      control: 'text',
      description: 'Content rendered inside the dialog body',
      table: {
        type: { summary: 'ReactNode' },
        category: 'Content',
      },
    },
    icon: {
      control: 'select',
      options: Object.values(IconName),
      description: 'Optional icon displayed next to the title',
      table: {
        type: { summary: 'IconName' },
        category: 'Content',
      },
    },
    // Interaction
    onClose: {
      action: 'closed',
      description: 'Callback function called when dialog is requested to close',
      table: {
        type: { summary: '() => void' },
        category: 'Interaction',
      },
    },
    // Styling
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
      description: 'Inline CSS styles to apply to the input',
      table: {
        type: { summary: 'CSSProperties' },
        category: 'Styling',
      },
    },
    // Identification
    id: {
      control: 'text',
      description: 'Unique identifier for the dialog',
      table: {
        type: { summary: 'string' },
        category: 'Identification',
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
type Story = StoryObj<typeof Dialog>;

export const Example: Story = {
  args: {
    isOpened: false,
    title: 'Please read this dialog',
    icon: IconName.Help,
  },
};
