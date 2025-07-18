import type { Meta, StoryObj } from '@storybook/react-vite';

import { UseWindowDimensionsExample } from './use-window-dimensions.example.tsx';

const meta: Meta<typeof UseWindowDimensionsExample> = {
  component: UseWindowDimensionsExample,
  title: 'Hooks/useWindowDimensions',
};

export default meta;
type Story = StoryObj<typeof UseWindowDimensionsExample>;

export const Example: Story = {};
