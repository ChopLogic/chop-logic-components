import type { Meta, StoryObj } from '@storybook/react-vite';

import { WithTooltipExample } from './with-tooltip.example';

const meta: Meta<typeof WithTooltipExample> = {
  component: WithTooltipExample,
  title: 'Utilities/withTooltip',
  args: {
    label: 'Hover me',
    tooltip: 'Supplemental information for this control',
    visibleOn: 'hover',
  },
  argTypes: {
    tooltip: {
      control: 'text',
      description: 'When non-empty, wraps the target in Tooltip and shows this content',
      table: {
        type: { summary: 'string | undefined' },
        category: 'HOC',
      },
    },
    visibleOn: {
      control: 'radio',
      options: ['hover', 'click', 'focus', 'contextmenu'],
      description: 'How the tooltip is triggered (passed through to Tooltip)',
      table: {
        defaultValue: { summary: 'hover' },
        type: { summary: "'hover' | 'click' | 'focus' | 'contextmenu'" },
        category: 'HOC',
      },
    },
    label: {
      control: 'text',
      description: 'Example prop on the wrapped demo button',
      table: {
        type: { summary: 'string' },
        category: 'Wrapped component',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof WithTooltipExample>;

export const Default: Story = {};

export const WithoutTooltip: Story = {
  args: {
    tooltip: undefined,
    label: 'No tooltip wrapper',
  },
};

export const VisibleOnClick: Story = {
  args: {
    visibleOn: 'click',
    label: 'Click me',
    tooltip: 'Opened on click',
  },
};

export const VisibleOnFocus: Story = {
  args: {
    visibleOn: 'focus',
    label: 'Focus me',
    tooltip: 'Shown when focused',
  },
};

export const VisibleOnContextMenu: Story = {
  args: {
    visibleOn: 'contextmenu',
    label: 'Right-click me',
    tooltip: 'Context menu trigger',
  },
};
