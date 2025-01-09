import type { Meta, StoryObj } from '@storybook/react';

import UseContainerDimensionsExample from './useContainerDimensions.example.tsx';

const meta: Meta<typeof UseContainerDimensionsExample> = {
  component: UseContainerDimensionsExample,
  title: 'Hooks/useContainerDimensions',
};

export default meta;
type Story = StoryObj<typeof UseContainerDimensionsExample>;

export const Example: Story = {};
