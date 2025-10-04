import type { Meta, StoryObj } from '@storybook/react-vite';

import { InteractiveDebounceDemo } from './use-debounce.example';

const meta: Meta<typeof InteractiveDebounceDemo> = {
  title: 'Hooks/useDebounce',
  component: InteractiveDebounceDemo,
  argTypes: {
    value: {
      control: 'text',
      description: 'The value to debounce',
      table: {
        type: { summary: 'T' },
      },
    },
    delay: {
      control: 'number',
      description: 'Debounce delay in milliseconds',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '500' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InteractiveDebounceDemo>;

export const InteractiveDemo: Story = {
  render: () => <InteractiveDebounceDemo delay={500} value={0} />,
  parameters: {
    docs: {
      description: {
        story:
          'Interactive demonstration showing real-time debouncing. Type in the input and adjust the delay to see how debouncing works.',
      },
    },
  },
};
