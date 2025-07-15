import type { Meta, StoryObj } from '@storybook/react-vite';

import { UseIsMountedExample } from './use-is-mounted.example.tsx';

const meta: Meta<typeof UseIsMountedExample> = {
  component: UseIsMountedExample,
  title: 'Hooks/useMount',
};

export default meta;
type Story = StoryObj<typeof UseIsMountedExample>;

export const Example: Story = {};
