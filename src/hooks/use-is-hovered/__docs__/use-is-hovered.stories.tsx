import type { Meta, StoryObj } from '@storybook/react-vite';

import { InteractiveHoverDemo } from './use-is-hovered.example';

const meta: Meta<typeof InteractiveHoverDemo> = {
  title: 'Hooks/useIsHovered',
  component: InteractiveHoverDemo,
  argTypes: {
    isMounted: {
      control: 'boolean',
      description: 'Enable/disable hover tracking',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InteractiveHoverDemo>;

export const InteractiveDemo: Story = {
  render: () => <InteractiveHoverDemo isMounted={true} />,
  parameters: {
    docs: {
      description: {
        story:
          'Interactive demonstration showing real-time hover state tracking. Hover over the box to see the state change. Toggle the tracking to see how the isMounted parameter affects the hook behavior.',
      },
    },
  },
};
