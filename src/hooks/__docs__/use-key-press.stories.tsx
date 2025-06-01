import type { Meta, StoryObj } from '@storybook/react-vite';

import { UseKeyPressExample } from './use-key-press.example';

const meta: Meta<typeof UseKeyPressExample> = {
  component: UseKeyPressExample,
  title: 'Hooks/useKeyPress',
};

export default meta;
type Story = StoryObj<typeof UseKeyPressExample>;

export const Example: Story = {};
