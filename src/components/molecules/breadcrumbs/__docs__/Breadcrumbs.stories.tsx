import { IconName } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Breadcrumbs from '../Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Molecules/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    // Content
    items: {
      control: 'object',
      description: 'Array of breadcrumb items',
      table: {
        type: { summary: 'BreadcrumbItem[]' },
        category: 'Content',
      },
    },
    // Styling
    className: {
      control: 'text',
      description: 'Additional CSS class for custom styling',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
    style: {
      control: 'object',
      description: 'Inline styles for the breadcrumbs container',
      table: {
        type: { summary: 'CSSProperties' },
        category: 'Styling',
      },
    },
    // Identification
    id: {
      control: 'text',
      description: 'Unique identifier for the breadcrumbs',
      table: {
        type: { summary: 'string' },
        category: 'Identification',
      },
    },
    title: {
      control: 'text',
      description: 'Title attribute for the breadcrumbs container',
      table: {
        type: { summary: 'string' },
        category: 'Identification',
      },
    },
    // Accessibility
    tabIndex: {
      control: 'number',
      description: 'Tab index for the breadcrumbs container',
      table: {
        type: { summary: 'number' },
        category: 'Accessibility',
      },
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
