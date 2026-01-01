import type { Meta, StoryObj } from '@storybook/react-vite';

import { PortalExample } from './Portal.example';

const meta: Meta<typeof PortalExample> = {
  title: 'Atoms/Portal',
  component: PortalExample,
  argTypes: {
    // Content
    children: {
      control: 'text',
      description: 'React element to be rendered in the portal',
      table: {
        type: { summary: 'ReactNode' },
        category: 'Content',
      },
    },
  },
  args: {
    children: 'Hello from portal!',
  },
};

export default meta;

type Story = StoryObj<typeof PortalExample>;

export const Example: Story = {};
