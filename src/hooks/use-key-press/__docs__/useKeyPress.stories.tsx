import type { Meta, StoryObj } from '@storybook/react';

import UseKeyPressExample from './useKeyPress.example';

const meta: Meta<typeof UseKeyPressExample> = {
  component: UseKeyPressExample,
  title: 'Hooks/useKeyPress',
};

export default meta;
type Story = StoryObj<typeof UseKeyPressExample>;

export const Default: Story = {};
