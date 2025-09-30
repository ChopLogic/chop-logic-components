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
    debounceDelay: 1000,
    name: 'q',
    onChange: (e) => console.log('Change:', e.target.value),
    onFocus: () => console.log('Focus'),
    onBlur: () => console.log('Blur'),
    onSearch: (value) => console.log('Search:', value),
    onClear: () => console.log('Clear'),
  },
  component: Search,
  title: 'Molecules/Search',
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Example: Story = {};
