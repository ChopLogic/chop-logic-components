import { IconName } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Link from '../Link';

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  argTypes: {
    href: {
      control: 'text',
      description: 'The URL the link points to',
    },
    children: {
      control: 'text',
      description: 'Link text content',
    },
    icon: {
      control: 'select',
      options: Object.values(IconName),
      description: 'Optional icon to display with the link',
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'Position of the icon relative to the text',
    },
    external: {
      control: 'boolean',
      description: 'Whether the link points to an external site',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the link is disabled',
      defaultValue: false,
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for custom styling',
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
    icon: IconName.Email,
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
    icon: IconName.Cancel,
  },
};
