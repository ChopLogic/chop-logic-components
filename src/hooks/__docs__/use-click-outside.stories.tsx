import type { Meta, StoryObj } from '@storybook/react-vite';

import { UseClickOutsideExample } from './use-click-outside.example';

const meta: Meta<typeof UseClickOutsideExample> = {
  component: UseClickOutsideExample,
  title: 'Hooks/useClickOutside',
};

export default meta;
type Story = StoryObj<typeof UseClickOutsideExample>;

export const Example: Story = {};
