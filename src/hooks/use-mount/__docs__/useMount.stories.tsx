import type { Meta, StoryObj } from '@storybook/react-vite';

import UseMountExample from './useMount.example';

const meta: Meta<typeof UseMountExample> = {
  component: UseMountExample,
  title: 'Hooks/useMount',
};

export default meta;
type Story = StoryObj<typeof UseMountExample>;

export const Example: Story = {};
