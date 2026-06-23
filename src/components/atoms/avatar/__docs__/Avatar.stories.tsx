import { LinkTarget } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Avatar from '../Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {
    // Content
    name: {
      control: 'text',
      description: 'Author name, used for alt text and fallback letter',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    tooltip: {
      control: 'text',
      description: 'A tooltip text',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    imageUrl: {
      control: 'text',
      description: 'URL for the avatar image',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    // Behavior
    link: {
      control: 'text',
      description: 'Optional URL to wrap the avatar in an anchor element',
      table: {
        type: { summary: 'string' },
        category: 'Behavior',
      },
    },
    linkTarget: {
      control: 'select',
      options: Object.values(LinkTarget),
      description: 'Anchor target attribute when link is provided',
      table: {
        type: { summary: 'LinkTarget' },
        defaultValue: { summary: '_self' },
        category: 'Behavior',
      },
    },
    // HTML Attributes
    id: {
      control: 'text',
      description: 'Unique identifier for the root element',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'HTML Attributes',
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for custom styling',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'HTML Attributes',
      },
    },
    style: {
      control: 'object',
      description: 'Inline styles for the root element',
      table: {
        type: { summary: 'CSSProperties' },
        defaultValue: { summary: 'undefined' },
        category: 'HTML Attributes',
      },
    },
    tabIndex: {
      control: 'number',
      description: 'Tab index for the root element',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
        category: 'HTML Attributes',
      },
    },
    title: {
      control: 'text',
      description: 'Title attribute for the root element',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'HTML Attributes',
      },
    },
  },
  args: {
    name: 'Jane Doe',
    tooltip: 'jane.doe@example.com',
    imageUrl: 'https://i.pravatar.cc/150?img=1',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    name: 'Jane Doe',
    tooltip: 'jane.doe@example.com',
    imageUrl: 'https://i.pravatar.cc/150?img=1',
  },
};

export const WithFallback: Story = {
  args: {
    name: 'John Smith',
    tooltip: 'John Smith',
    imageUrl: 'https://broken-url.example/avatar.jpg',
  },
};

export const WithLink: Story = {
  args: {
    name: 'Jane Doe',
    tooltip: 'Jane Doe Profile',
    imageUrl: 'https://i.pravatar.cc/150?img=1',
    link: 'https://example.com/profile/jane',
    linkTarget: LinkTarget.Self,
  },
};

export const WithExternalLink: Story = {
  args: {
    name: 'Jane Doe',
    tooltip: 'jane.doe@example.com',
    imageUrl: 'https://i.pravatar.cc/150?img=1',
    link: 'https://example.com/profile/jane',
    linkTarget: LinkTarget.Blank,
  },
};
