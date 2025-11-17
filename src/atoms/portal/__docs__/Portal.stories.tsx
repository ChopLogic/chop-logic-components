import type { Meta, StoryObj } from '@storybook/react-vite';

import { PortalExample } from './Portal.example';

const meta: Meta<typeof PortalExample> = {
  title: 'Atoms/Portal',
  component: PortalExample,
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

export const Example: Story = {};
