import type { Meta, StoryObj } from '@storybook/react-vite';

import { UseAnchorPositionExample } from './use-anchor-position.example';

const meta: Meta<typeof UseAnchorPositionExample> = {
  component: UseAnchorPositionExample,
  title: 'Hooks/useAnchorPosition',
};

export default meta;
type Story = StoryObj<typeof UseAnchorPositionExample>;

export const Example: Story = {};
