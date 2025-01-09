import type { Meta, StoryObj } from '@storybook/react';

import UseClickOutsideExample from './useClickOutside.example.tsx';

const meta: Meta<typeof UseClickOutsideExample> = {
  component: UseClickOutsideExample,
  title: 'Hooks/useClickOutside',
};

export default meta;
type Story = StoryObj<typeof UseClickOutsideExample>;

export const Example: Story = {};
