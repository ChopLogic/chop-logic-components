import type { Meta, StoryObj } from '@storybook/react';

import PortalExample from './Portal.example.tsx';

const meta: Meta<typeof PortalExample> = {
  title: 'Containers/Portal',
  component: PortalExample,
  parameters: {
    docs: {
      description: {
        component: 'A portal component that renders its children into a newly created div appended to the body.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'React element to be rendered in the portal.',
      control: { type: 'text' },
    },
  },
  args: {
    children: 'Hello from portal!',
  },
};

export default meta;

type Story = StoryObj<typeof PortalExample>;

export const Default: Story = {};
