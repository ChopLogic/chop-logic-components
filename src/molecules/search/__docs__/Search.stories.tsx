import type { Meta, StoryObj } from '@storybook/react-vite';

import Search from '../Search';

const meta: Meta<typeof Search> = {
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    disabled: false,
    clearable: true,
    spellCheck: false,
    autoComplete: 'off',
  },
  component: Search,
  title: 'Molecules/Search',
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Example: Story = {};
