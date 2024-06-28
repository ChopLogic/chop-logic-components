import type { Meta, StoryObj } from '@storybook/react';
import Example from './TooltipExample';

const meta: Meta<typeof Example> = {
  title: 'Tooltip',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    tooltipContent: 'Tooltip content',
    containerTag: 'span',
    visibleOn: 'hover',
  },
};
