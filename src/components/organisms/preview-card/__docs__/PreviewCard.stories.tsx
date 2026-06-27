import { LinkTarget } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import PreviewCard from '../PreviewCard';

const sampleAuthors = [
  {
    id: '1',
    name: 'Jane Smith',
    imageUrl: 'https://i.pravatar.cc/150?img=1',
    link: 'https://example.com/jane',
  },
  {
    id: '2',
    name: 'John Doe',
    imageUrl: 'https://i.pravatar.cc/150?img=2',
  },
];

const sampleTags = [
  {
    id: '1',
    name: 'React',
    color: '#61DAFB',
    tooltip: 'A JavaScript library for building UIs',
  },
  { id: '2', name: 'JavaScript', color: '#f5f122' },
  { id: '3', name: 'CSS' },
];

const sampleImage = {
  src: 'https://picsum.photos/seed/preview/600/300',
  alt: 'Article preview image',
};

const meta: Meta<typeof PreviewCard> = {
  component: PreviewCard,
  title: 'Organisms/PreviewCard',
  argTypes: {
    // Content
    link: {
      control: 'text',
      description: 'URL for the card primary link',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    image: {
      control: 'object',
      description: 'Image props (src, alt, etc.) passed to the Image atom',
      table: {
        type: { summary: 'ImageProps' },
        category: 'Content',
      },
    },
    title: {
      control: 'text',
      description: 'Card title rendered as an h3 heading',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    summary: {
      control: 'text',
      description: 'Optional summary paragraph text',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    authors: {
      control: 'object',
      description: 'Array of authors rendered as Avatar components',
      table: {
        type: { summary: 'Author[]' },
        defaultValue: { summary: '[]' },
        category: 'Content',
      },
    },
    tags: {
      control: 'object',
      description: 'Array of tags rendered as Tag components',
      table: {
        type: { summary: 'TagData[]' },
        defaultValue: { summary: '[]' },
        category: 'Content',
      },
    },
    // Behavior
    linkTarget: {
      control: 'select',
      options: Object.values(LinkTarget),
      description: 'Anchor target attribute for the image link',
      table: {
        type: { summary: 'LinkTarget' },
        defaultValue: { summary: '_self' },
        category: 'Behavior',
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
      description: 'Inline CSS styles for the root element',
      table: {
        type: { summary: 'CSSProperties' },
        category: 'Styling',
      },
    },
    // Identification
    id: {
      control: 'text',
      description: 'Unique identifier for the card',
      table: {
        type: { summary: 'string' },
        category: 'Identification',
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
  },
  args: {
    link: 'https://example.com/article',
    image: sampleImage,
    title: 'Building Accessible Component Libraries',
    summary:
      'A comprehensive guide to creating reusable, accessible React components with TypeScript and CSS variables for theming.',
    authors: sampleAuthors,
    tags: sampleTags,
  },
};

export default meta;
type Story = StoryObj<typeof PreviewCard>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'PreviewCard with all sections populated: image, title, summary, authors, and tags.',
      },
    },
  },
};

export const WithoutSummary: Story = {
  args: {
    summary: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'PreviewCard without the optional summary paragraph.',
      },
    },
  },
};

export const WithoutAuthors: Story = {
  args: {
    authors: [],
  },
  parameters: {
    docs: {
      description: {
        story: 'PreviewCard with an empty authors array — the authors section is omitted.',
      },
    },
  },
};

export const WithoutTags: Story = {
  args: {
    tags: [],
  },
  parameters: {
    docs: {
      description: {
        story: 'PreviewCard with an empty tags array — the tags section is omitted.',
      },
    },
  },
};

export const ExternalLink: Story = {
  args: {
    linkTarget: LinkTarget.Blank,
  },
  parameters: {
    docs: {
      description: {
        story:
          'PreviewCard with linkTarget set to _blank. The image link opens in a new window and includes rel="noopener noreferrer" and an accessible label indicating external navigation.',
      },
    },
  },
};
