import type { Meta, StoryObj } from '@storybook/react-vite';

import Tag from '../Tag';

const meta: Meta<typeof Tag> = {
  title: 'Atoms/Tag',
  component: Tag,
  args: {
    name: 'React',
  },
  argTypes: {
    // Content
    name: {
      control: 'text',
      description: 'The text content displayed in the tag',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    tooltip: {
      control: 'text',
      description: 'Optional tooltip description shown on hover',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    // Styling
    color: {
      control: 'color',
      description: 'Custom CSS color for the tag background via --cl-tag-color',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names for custom styling',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
    style: {
      control: 'object',
      description: 'Inline CSS styles to apply to the tag',
      table: {
        type: { summary: 'CSSProperties' },
        category: 'Styling',
      },
    },
    // Accessibility
    tabIndex: {
      control: 'number',
      description: 'Tab index for keyboard navigation',
      table: {
        type: { summary: 'number' },
        category: 'Accessibility',
      },
    },
    title: {
      control: 'text',
      description: 'Native title attribute for hover text',
      table: {
        type: { summary: 'string' },
        category: 'Accessibility',
      },
    },
    visibleOn: {
      control: 'radio',
      options: ['hover', 'click', 'focus', 'contextmenu'],
      description: 'Event that triggers tooltip visibility',
      table: {
        type: { summary: "'hover' | 'click' | 'focus' | 'contextmenu'" },
        category: 'Accessibility',
      },
    },
    // Identification
    id: {
      control: 'text',
      description: 'Unique identifier for the tag element',
      table: {
        type: { summary: 'string' },
        category: 'Identification',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    name: 'React',
  },
};

export const WithTooltip: Story = {
  args: {
    name: 'TypeScript',
    tooltip: 'A strongly typed programming language that builds on JavaScript',
  },
};

export const WithColor: Story = {
  args: {
    name: 'Frontend',
    tooltip: 'Technologies related to client-side development',
    color: '#2196F3',
  },
};
