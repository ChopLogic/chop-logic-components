import type { Meta, StoryObj } from '@storybook/react-vite';

import UseWindowDimensionsExample from './useWindowDimensions.example';

const meta: Meta<typeof UseWindowDimensionsExample> = {
  component: UseWindowDimensionsExample,
  title: 'Hooks/useWindowDimensions',
};

export default meta;
type Story = StoryObj<typeof UseWindowDimensionsExample>;

export const Example: Story = {};
