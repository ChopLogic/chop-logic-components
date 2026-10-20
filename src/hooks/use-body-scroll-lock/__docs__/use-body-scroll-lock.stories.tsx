import type { Meta, StoryObj } from '@storybook/react-vite';

import { UseBodyScrollLockExample } from './use-body-scroll-lock.example';

const meta: Meta<typeof UseBodyScrollLockExample> = {
  component: UseBodyScrollLockExample,
  title: 'Hooks/useBodyScrollLock',
};

export default meta;
type Story = StoryObj<typeof UseBodyScrollLockExample>;

export const Example: Story = {};
