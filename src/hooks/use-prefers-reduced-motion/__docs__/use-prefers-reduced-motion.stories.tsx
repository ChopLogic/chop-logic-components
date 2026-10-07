import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  ConditionalAnimationExample,
  ReducedMotionDemo,
} from './use-prefers-reduced-motion.example';

const meta: Meta<typeof ReducedMotionDemo> = {
  title: 'Hooks/usePrefersReducedMotion',
  component: ReducedMotionDemo,
};

export default meta;
type Story = StoryObj<typeof ReducedMotionDemo>;

export const InteractiveDemo: Story = {
  render: () => <ReducedMotionDemo />,
  parameters: {
    docs: {
      description: {
        story:
          'Interactive demonstration showing how the hook detects the system reduced motion preference. Toggle your system setting to see the value update in real-time.',
      },
    },
  },
};

export const ConditionalAnimation: StoryObj<typeof ConditionalAnimationExample> = {
  render: () => <ConditionalAnimationExample />,
  parameters: {
    docs: {
      description: {
        story:
          'Example showing how to conditionally apply animations based on the user preference. When reduced motion is enabled, transitions are instant instead of animated.',
      },
    },
  },
};
