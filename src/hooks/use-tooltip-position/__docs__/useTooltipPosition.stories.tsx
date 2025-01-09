import type { Meta, StoryObj } from '@storybook/react';

import UseTooltipPositionExample from './useTooltipPosition.example';

const meta: Meta<typeof UseTooltipPositionExample> = {
  component: UseTooltipPositionExample,
  title: 'Hooks/useTooltipPosition',
};

export default meta;
type Story = StoryObj<typeof UseTooltipPositionExample>;

export const Example: Story = {};
