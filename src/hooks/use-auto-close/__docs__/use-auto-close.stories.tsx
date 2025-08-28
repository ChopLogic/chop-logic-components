import type { Meta, StoryObj } from '@storybook/react-vite';

import { UseAutoCloseExample } from './use-auto-close.example';

const meta: Meta<typeof UseAutoCloseExample> = {
  component: UseAutoCloseExample,
  title: 'Hooks/useAutoClose',
};

export default meta;
type Story = StoryObj<typeof UseAutoCloseExample>;

export const Example: Story = {};
