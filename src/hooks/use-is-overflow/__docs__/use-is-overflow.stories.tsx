import type { Meta, StoryObj } from '@storybook/react-vite';

import { UseIsOverflowExample } from './use-is-overflow.example';

const meta: Meta<typeof UseIsOverflowExample> = {
  component: UseIsOverflowExample,
  title: 'Hooks/useIsOverflow',
};

export default meta;
type Story = StoryObj<typeof UseIsOverflowExample>;

export const Example: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
};
