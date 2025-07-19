import { ChopLogicTooltip } from '@atoms';
import { ChopLogicTooltipContainer } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { TooltipExample } from './Tooltip.example';

const meta: Meta<typeof ChopLogicTooltip> = {
  component: TooltipExample,
  title: 'Atoms/Tooltip',
};

export default meta;
type Story = StoryObj<typeof ChopLogicTooltip>;

export const VisibleOnHover: Story = {
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: ChopLogicTooltipContainer.Span,
    visibleOn: 'hover',
    id: 'tooltip-id',
    autoClose: false,
    autoCloseDelay: 3000,
  },
  argTypes: {
    containerTag: {
      table: {
        defaultValue: { summary: 'span' },
        type: { summary: 'ChopLogicTooltipContainer' },
      },
    },
    visibleOn: {
      table: {
        defaultValue: { summary: 'hover' },
        type: { summary: "'hover' | 'click' | 'focus' | 'contextmenu'" },
      },
    },
    autoClose: {
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    autoCloseDelay: {
      table: {
        defaultValue: { summary: '3000' },
        type: { summary: 'number' },
      },
    },
  },
};

export const VisibleOnClick: Story = {
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: ChopLogicTooltipContainer.Div,
    visibleOn: 'click',
    id: 'tooltip-id',
    autoClose: true,
    autoCloseDelay: 3000,
  },
};

export const VisibleOnFocus: Story = {
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: ChopLogicTooltipContainer.Div,
    visibleOn: 'focus',
    id: 'tooltip-id',
    autoClose: true,
    autoCloseDelay: 3000,
  },
};

export const VisibleOnContextMenu: Story = {
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: ChopLogicTooltipContainer.Div,
    visibleOn: 'contextmenu',
    id: 'tooltip-id',
    autoClose: true,
    autoCloseDelay: 3000,
  },
};
