import type { Meta, StoryObj } from '@storybook/react-vite';

import { InteractiveRemainingTimerDemo } from './use-remaining-timer.example';

const meta: Meta<typeof InteractiveRemainingTimerDemo> = {
  title: 'Hooks/useRemainingTimer',
  component: InteractiveRemainingTimerDemo,
  argTypes: {
    autoCloseDelay: {
      control: 'number',
      description: 'Delay in milliseconds before auto-closing',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5000' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InteractiveRemainingTimerDemo>;

export const InteractiveDemo: Story = {
  render: () => <InteractiveRemainingTimerDemo autoCloseDelay={5000} />,
  parameters: {
    docs: {
      description: {
        story:
          'Interactive demonstration of the timer countdown. Open an alert to start the timer, hover over it to pause the countdown, and watch the progress bar. Adjust the delay value and open new alerts to see different timeout durations.',
      },
    },
  },
};
