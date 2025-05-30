import { ChopLogicTooltipContainer } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import TooltipExample from './Tooltip.example.tsx';

const meta: Meta<typeof TooltipExample> = {
  component: TooltipExample,
  title: 'Atoms/Tooltip',
};

export default meta;
type Story = StoryObj<typeof TooltipExample>;

export const VisibleOnHover: Story = {
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: ChopLogicTooltipContainer.Span,
    visibleOn: 'hover',
    id: 'tooltip',
  },
};

export const VisibleOnClick: Story = {
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: ChopLogicTooltipContainer.Div,
    visibleOn: 'click',
    id: 'tooltip',
  },
};

export const VisibleOnFocus: Story = {
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: ChopLogicTooltipContainer.Div,
    visibleOn: 'focus',
    id: 'tooltip',
  },
};

export const VisibleOnContextMenu: Story = {
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: ChopLogicTooltipContainer.Div,
    visibleOn: 'contextmenu',
    id: 'tooltip',
  },
};
