import type { Meta, StoryObj } from '@storybook/react-vite';

import { UseTooltipPositionExample } from './use-tooltip-position.example.tsx';

const meta: Meta<typeof UseTooltipPositionExample> = {
  component: UseTooltipPositionExample,
  title: 'Hooks/useTooltipPosition',
};

export default meta;
type Story = StoryObj<typeof UseTooltipPositionExample>;

export const Example: Story = {};
