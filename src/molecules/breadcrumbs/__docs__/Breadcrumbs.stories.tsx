import { IconName } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Breadcrumbs from '../Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Molecules/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
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
      { label: 'Products', icon: IconName.Copy, link: '/products' },
      { label: 'Electronics', icon: IconName.Cut, link: '/products/electronics' },
      { label: 'Smartphones', icon: IconName.Phone },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Documents', link: '/documents' },
      { label: 'Projects', link: '/documents/projects' },
      { label: 'Q4 Report' },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { label: 'Home', icon: IconName.Home, link: '/' },
      { label: 'Settings', icon: IconName.Paste, link: '/settings' },
      { label: 'Account', icon: IconName.Login, link: '/settings/account' },
      { label: 'Privacy', icon: IconName.Show },
    ],
  },
};

export const SingleItem: Story = {
  args: {
    items: [{ label: 'Dashboard', icon: IconName.Home }],
  },
};

export const TwoItems: Story = {
  args: {
    items: [{ label: 'Home', link: '/' }, { label: 'Current Page' }],
  },
};

export const LongLabels: Story = {
  args: {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Very Long Category Name That Might Wrap', link: '/category' },
      { label: 'Another Extremely Long Product Name That Could Break Layout', link: '/category/product' },
      { label: 'Current Page With Also Very Long Descriptive Title' },
    ],
  },
};

export const WithoutLinks: Story = {
  args: {
    items: [{ label: 'Home' }, { label: 'Products' }, { label: 'Electronics' }, { label: 'Smartphones' }],
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumbs without any links - useful for static navigation paths.',
      },
    },
  },
};
