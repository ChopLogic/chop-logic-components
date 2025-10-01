import type { Meta, StoryObj } from '@storybook/react-vite';

import { SearchExample } from './Search.example';

const meta: Meta<typeof SearchExample> = {
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
  component: SearchExample,
  title: 'Molecules/Search',
};

export default meta;
type Story = StoryObj<typeof SearchExample>;

export const Manual: Story = {
  args: {
    searchMode: 'manual',
  },
};

export const Automatic: Story = {
  args: {
    searchMode: 'automatic',
  },
};
