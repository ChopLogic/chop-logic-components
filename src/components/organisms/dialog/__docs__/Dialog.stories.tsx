import { DialogVariant, IconName } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import type Dialog from '../Dialog';
import { DialogExample, StackedDialogsExample } from './Dialog.example';

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
    // Appearance
    variant: {
      control: 'select',
      options: Object.values(DialogVariant),
      description:
        'Display variant: default (centered/bottom-sheet), drawer-right (slides from right), drawer-left (slides from left)',
      table: {
        type: { summary: 'DialogVariant' },
        defaultValue: { summary: 'DialogVariant.Default' },
        category: 'Appearance',
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
    contentClassName: {
      control: 'text',
      description: 'Additional CSS class applied to the dialog content wrapper',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
    headerClassName: {
      control: 'text',
      description: 'Additional CSS class applied to the dialog header element',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
    bodyClassName: {
      control: 'text',
      description: 'Additional CSS class applied to the dialog body wrapper',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
    closeButtonClassName: {
      control: 'text',
      description: 'Additional CSS class applied to the close button of the dialog',
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

export const Default: Story = {
  args: {
    isOpened: false,
    title: 'Please read this dialog',
    icon: IconName.Info,
    variant: DialogVariant.Default,
  },
};

export const DrawerRight: Story = {
  args: {
    isOpened: false,
    title: 'Right Drawer',
    icon: IconName.Menu,
    variant: DialogVariant.DrawerRight,
  },
};

export const DrawerLeft: Story = {
  args: {
    isOpened: false,
    title: 'Left Drawer',
    icon: IconName.Menu,
    variant: DialogVariant.DrawerLeft,
  },
};

export const StackedDialogs: StoryObj<typeof StackedDialogsExample> = {
  render: () => <StackedDialogsExample />,
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates stacked dialogs with coordinated scroll locking. Open multiple dialogs and close them in any order - the page scroll should only be restored when ALL dialogs are closed.',
      },
    },
  },
};
