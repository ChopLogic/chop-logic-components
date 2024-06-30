import type { Meta, StoryObj } from '@storybook/react';
import TooltipExample from './TooltipExample';

const meta: Meta<typeof TooltipExample> = {
  title: 'Tooltip',
  component: TooltipExample,
};

export default meta;
type Story = StoryObj<typeof TooltipExample>;

export const Default: Story = {
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'span',
    visibleOn: 'hover',
  },
};

export const ClickToShow: Story = {
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'div',
    visibleOn: 'click',
  },
};

export const FocusToShow: Story = {
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'div',
    visibleOn: 'focus',
  },
};
