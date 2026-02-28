import { IconName } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Link from '../Link';

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  argTypes: {
    // Content
    children: {
      control: 'text',
      description: 'Link text content',
      table: {
        type: { summary: 'string | ReactNode' },
        category: 'Content',
      },
    },
    icon: {
      control: 'select',
      options: Object.values(IconName),
      description: 'Optional icon to display with the link',
      table: {
        type: { summary: 'IconName' },
        category: 'Content',
      },
    },
    // Behavior
    href: {
      control: 'text',
      description: 'The URL the link points to',
      table: {
        type: { summary: 'string' },
        category: 'Behavior',
      },
    },
    external: {
      control: 'boolean',
      description: 'Whether the link points to an external site',
      table: {
        type: { summary: 'boolean' },
        category: 'Behavior',
      },
    },
    // Styling
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'Position of the icon relative to the text',
      table: {
        type: { summary: "'left' | 'right'" },
        defaultValue: { summary: 'left' },
        category: 'Styling',
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for custom styling',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
    // State
    disabled: {
      control: 'boolean',
      description: 'Whether the link is disabled',
      table: {
        type: { summary: 'boolean' },
        category: 'State',
      },
    },
  },
  args: {
    href: '#',
    children: 'Example Link',
    external: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: 'Internal Link',
    href: '/',
  },
};

export const External: Story = {
  args: {
    children: 'External Website',
    href: 'https://google.com',
    external: true,
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: 'Download File',
    href: '/files/document.pdf',
    icon: IconName.Download,
    iconPosition: 'left',
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'Learn More',
    href: '/learn-more',
    icon: IconName.ChevronRight,
    iconPosition: 'right',
  },
};

export const EmailLink: Story = {
  args: {
    children: 'Contact Us',
    href: 'mailto:hello@example.com',
    icon: IconName.Mail,
  },
};

export const PhoneLink: Story = {
  args: {
    children: 'Call Us',
    href: 'tel:+1234567890',
    icon: IconName.Phone,
  },
};

export const DisabledLink: Story = {
  args: {
    children: 'Disabled Link',
    disabled: true,
    href: '#',
    icon: IconName.XSquare,
  },
};
