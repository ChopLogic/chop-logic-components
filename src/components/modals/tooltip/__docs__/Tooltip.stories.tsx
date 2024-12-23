import type { Meta, StoryObj } from '@storybook/react';

import TooltipExample from './Tooltip.example.tsx';

const meta: Meta<typeof TooltipExample> = {
  component: TooltipExample,
  title: 'Modals/Tooltip',
};

export default meta;
type Story = StoryObj<typeof TooltipExample>;

export const VisibleOnHover: Story = {
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'span',
    visibleOn: 'hover',
    id: 'tooltip',
  },
};

export const VisibleOnClick: Story = {
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'div',
    visibleOn: 'click',
    id: 'tooltip',
  },
};

export const VisibleOnFocus: Story = {
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'div',
    visibleOn: 'focus',
    id: 'tooltip',
  },
};

export const VisibleOnContextMenu: Story = {
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'div',
    visibleOn: 'contextmenu',
    id: 'tooltip',
  },
};
