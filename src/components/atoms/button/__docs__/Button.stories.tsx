import { ButtonView, IconName } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from '../Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  args: {
    text: 'Button',
    type: 'button',
    view: ButtonView.Primary,
    disabled: false,
    extended: false,
    onClick: () => console.log('Button clicked!'),
  },
  argTypes: {
    // Content
    text: {
      control: 'text',
      description: 'The text content displayed on the button',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    icon: {
      control: 'select',
      options: Object.values(IconName),
      description: 'Icon to display alongside the button text',
      table: {
        type: { summary: 'IconName' },
        category: 'Content',
      },
    },
    // Styling
    view: {
      control: 'select',
      options: Object.values(ButtonView),
      description: 'Visual style variant of the button',
      table: {
        type: { summary: 'ButtonView' },
        category: 'Styling',
      },
    },
    extended: {
      control: 'boolean',
      description: 'Whether the button should take full available width',
      table: {
        type: { summary: 'boolean' },
        category: 'Styling',
      },
    },
    // Behavior
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'The HTML button type attribute',
      table: {
        type: { summary: "'button' | 'submit' | 'reset'" },
        defaultValue: { summary: 'button' },
        category: 'Behavior',
      },
    },
    // State
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        category: 'State',
      },
    },
    // Interaction
    tooltip: {
      control: 'text',
      description: 'Tooltip text shown on hover',
      table: {
        type: { summary: 'string' },
        category: 'Interaction',
      },
    },
    // Accessibility
    label: {
      control: 'text',
      description: 'Accessibility label for icon-only buttons',
      table: {
        type: { summary: 'string' },
        category: 'Accessibility',
      },
    },
    tabIndex: {
      control: 'number',
      description: 'Tab index for keyboard navigation',
      table: {
        type: { summary: 'number' },
        category: 'Accessibility',
      },
    },
    // Interaction
    onClick: {
      action: 'clicked',
      description: 'Callback function triggered when the button is clicked',
      table: {
        type: { summary: 'MouseEventHandler<HTMLButtonElement>' },
        category: 'Interaction',
      },
    },
    onFocus: {
      action: 'focused',
      description: 'Callback function triggered when the button receives focus',
      table: {
        type: { summary: 'FocusEventHandler<HTMLButtonElement>' },
        category: 'Interaction',
      },
    },
    onBlur: {
      action: 'blurred',
      description: 'Callback function triggered when the button loses focus',
      table: {
        type: { summary: 'FocusEventHandler<HTMLButtonElement>' },
        category: 'Interaction',
      },
    },
    title: {
      control: 'text',
      description: 'Tooltip text shown on hover',
      table: {
        type: { summary: 'string' },
        category: 'Interaction',
      },
    },
    visibleOn: {
      control: 'radio',
      options: ['hover', 'click', 'focus', 'contextmenu'],
      description: 'Event that triggers tooltip visibility',
      table: {
        type: { summary: "'hover' | 'click' | 'focus' | 'contextmenu'" },
        category: 'Interaction',
      },
    },
    // Identification
    id: {
      control: 'text',
      description: 'Unique identifier for the button element',
      table: {
        type: { summary: 'string' },
        category: 'Identification',
      },
    },
    name: {
      control: 'text',
      description: 'The name attribute for the button element (useful for form submission)',
      table: {
        type: { summary: 'string' },
        category: 'Identification',
      },
    },
    // Styling
    className: {
      control: 'text',
      description: 'Additional CSS class names for custom styling',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
    style: {
      control: 'object',
      description: 'Inline CSS styles to apply to the button',
      table: {
        type: { summary: 'CSSProperties' },
        category: 'Styling',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: 'Copy',
    view: ButtonView.Primary,
    icon: IconName.Copy,
  },
};

export const Secondary: Story = {
  args: {
    text: 'Learn more...',
    view: ButtonView.Secondary,
    icon: IconName.ChevronsRight,
  },
};

export const Icon: Story = {
  args: {
    view: ButtonView.Icon,
    icon: IconName.Star,
    label: 'Favorite',
  },
};

export const WithTooltip: Story = {
  args: {
    text: 'Hover On Me',
    view: ButtonView.Primary,
    tooltip: 'This button does nothing...',
  },
};

export const IconWithTooltip: Story = {
  args: {
    view: ButtonView.Icon,
    icon: IconName.ThumbsUp,
    label: 'Thumbs Up',
    tooltip: 'Like this!',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled',
    view: ButtonView.Primary,
    icon: IconName.PhoneOff,
    disabled: true,
  },
};
