import { IconName } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Breadcrumbs from '../Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Molecules/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of breadcrumb items',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for custom styling',
    },
    id: {
      control: 'text',
      description: 'Unique identifier for the breadcrumbs',
    },
    style: {
      control: 'object',
      description: 'Inline styles for the breadcrumbs container',
    },
    tabIndex: {
      control: 'number',
      description: 'Tab index for the breadcrumbs container',
    },
    title: {
      control: 'text',
      description: 'Title attribute for the breadcrumbs container',
    },
  },
  args: {
    items: [
      { label: 'Home', icon: IconName.Home, link: '/' },
      { label: 'Documents', icon: IconName.Documents, link: '/documents' },
      { label: 'Projects', icon: IconName.Projects, link: '/documents/projects' },
      { label: 'Report' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {};

export const WithoutIcons: Story = {
  args: {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Settings', link: '/settings' },
      { label: 'Account', link: '/settings/account' },
      { label: 'Privacy' },
    ],
  },
};

export const WithoutLinks: Story = {
  args: {
    items: [
      { label: 'Home' },
      { label: 'Products' },
      { label: 'Electronics' },
      { label: 'Smartphones' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumbs without any links - useful for static navigation paths.',
      },
    },
  },
};
