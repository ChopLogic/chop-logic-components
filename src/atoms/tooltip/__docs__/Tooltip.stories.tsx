import type { Tooltip } from '@atoms';
import { TooltipContainer } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { TooltipExample } from './Tooltip.example';

const meta: Meta<typeof Tooltip> = {
  component: TooltipExample,
  title: 'Atoms/Tooltip',
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const VisibleOnHover: Story = {
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: TooltipContainer.Span,
    visibleOn: 'hover',
    id: 'tooltip-id',
    autoClose: false,
    autoCloseDelay: 3000,
  },
  argTypes: {
    // Content
    tooltipContent: {
      control: 'text',
      description: 'The content to display in the tooltip',
      table: {
        type: { summary: 'ReactNode' },
        category: 'Content',
      },
    },
    // Styling
    containerTag: {
      control: 'select',
      options: Object.values(TooltipContainer),
      description: 'The HTML tag to use as the container wrapper',
      table: {
        defaultValue: { summary: 'span' },
        type: { summary: 'TooltipContainer' },
        category: 'Styling',
      },
    },
    // Behavior
    visibleOn: {
      control: 'radio',
      options: ['hover', 'click', 'focus', 'contextmenu'],
      description: 'Event that triggers tooltip visibility',
      table: {
        defaultValue: { summary: 'hover' },
        type: { summary: "'hover' | 'click' | 'focus' | 'contextmenu'" },
        category: 'Behavior',
      },
    },
    autoClose: {
      control: 'boolean',
      description: 'Whether to automatically close the tooltip after a delay',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
        category: 'Behavior',
      },
    },
    autoCloseDelay: {
      control: 'number',
      description: 'Delay in milliseconds before auto-closing the tooltip',
      table: {
        defaultValue: { summary: '3000' },
        type: { summary: 'number' },
        category: 'Behavior',
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
    className: {
      control: 'text',
      description: 'Additional CSS class for the search wrapper',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'HTML Attributes',
      },
    },
    style: {
      control: 'object',
      description: 'Inline styles for the search wrapper',
      table: {
        type: { summary: 'CSSProperties' },
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

export const VisibleOnClick: Story = {
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: TooltipContainer.Div,
    visibleOn: 'click',
    id: 'tooltip-id',
    autoClose: true,
    autoCloseDelay: 3000,
  },
};

export const VisibleOnFocus: Story = {
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: TooltipContainer.Div,
    visibleOn: 'focus',
    id: 'tooltip-id',
    autoClose: true,
    autoCloseDelay: 3000,
  },
};

export const VisibleOnContextMenu: Story = {
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: TooltipContainer.Div,
    visibleOn: 'contextmenu',
    id: 'tooltip-id',
    autoClose: true,
    autoCloseDelay: 3000,
  },
};
