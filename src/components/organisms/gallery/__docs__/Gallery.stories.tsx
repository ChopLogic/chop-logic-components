import type { Meta, StoryObj } from '@storybook/react-vite';

import Gallery from '../Gallery';

const meta: Meta<typeof Gallery> = {
  component: Gallery,
  title: 'Organisms/Gallery',
  argTypes: {
    // Content
    images: {
      control: 'object',
      description: 'Array of image items to display in the gallery',
      table: {
        type: { summary: 'GalleryItem[]' },
        defaultValue: { summary: '[]' },
        category: 'Content',
      },
    },
    // Behavior
    layout: {
      control: 'radio',
      options: ['grid', 'masonry', 'carousel'],
      description: 'Layout mode for the gallery display',
      table: {
        type: { summary: "'grid' | 'masonry' | 'carousel'" },
        defaultValue: { summary: "'grid'" },
        category: 'Behavior',
      },
    },
    columns: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Number of columns (grid: 1-12, masonry: overrides responsive default)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '3' },
        category: 'Behavior',
      },
    },
    rows: {
      control: 'number',
      description: 'Maximum visible rows (grid mode only)',
      table: {
        type: { summary: 'number' },
        category: 'Behavior',
      },
    },
    gap: {
      control: 'text',
      description: 'CSS gap value between items (defaults to --cl-m-gap)',
      table: {
        type: { summary: 'string' },
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
      description: 'Unique identifier for the gallery',
      table: {
        type: { summary: 'string' },
        category: 'Identification',
      },
    },
    title: {
      control: 'text',
      description: 'HTML title attribute for the root element',
      table: {
        type: { summary: 'string' },
        category: 'Identification',
      },
    },
    // Accessibility
    label: {
      control: 'text',
      description: 'Accessible label for the gallery region',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'Image gallery'" },
        category: 'Accessibility',
      },
    },
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
    layout: 'grid',
    columns: 3,
    images: [
      { src: 'https://picsum.photos/seed/gallery1/400/300', alt: 'Sample image 1' },
      { src: 'https://picsum.photos/seed/gallery2/400/300', alt: 'Sample image 2' },
      { src: 'https://picsum.photos/seed/gallery3/400/300', alt: 'Sample image 3' },
      { src: 'https://picsum.photos/seed/gallery4/400/300', alt: 'Sample image 4' },
      { src: 'https://picsum.photos/seed/gallery5/400/300', alt: 'Sample image 5' },
      { src: 'https://picsum.photos/seed/gallery6/400/300', alt: 'Sample image 6' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Gallery>;

export const Grid: Story = {
  args: {
    layout: 'grid',
    columns: 3,
  },
  parameters: {
    docs: {
      description: {
        story: 'Gallery in grid layout mode with uniform columns and rows.',
      },
    },
  },
};

export const Masonry: Story = {
  args: {
    layout: 'masonry',
    images: [
      { src: 'https://picsum.photos/seed/masonry1/400/500', alt: 'Tall image 1' },
      { src: 'https://picsum.photos/seed/masonry2/400/250', alt: 'Short image 2' },
      { src: 'https://picsum.photos/seed/masonry3/400/400', alt: 'Square image 3' },
      { src: 'https://picsum.photos/seed/masonry4/400/350', alt: 'Medium image 4' },
      { src: 'https://picsum.photos/seed/masonry5/400/600', alt: 'Tall image 5' },
      { src: 'https://picsum.photos/seed/masonry6/400/300', alt: 'Standard image 6' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Gallery in masonry layout mode with varying image heights packed tightly.',
      },
    },
  },
};

export const Carousel: Story = {
  args: {
    layout: 'carousel',
    images: [
      { src: 'https://picsum.photos/seed/carousel1/600/400', alt: 'Carousel image 1' },
      { src: 'https://picsum.photos/seed/carousel2/600/400', alt: 'Carousel image 2' },
      { src: 'https://picsum.photos/seed/carousel3/600/400', alt: 'Carousel image 3' },
      { src: 'https://picsum.photos/seed/carousel4/600/400', alt: 'Carousel image 4' },
      { src: 'https://picsum.photos/seed/carousel5/600/400', alt: 'Carousel image 5' },
      { src: 'https://picsum.photos/seed/carousel6/600/400', alt: 'Carousel image 6' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Gallery in carousel layout mode with horizontal scrolling and navigation buttons.',
      },
    },
  },
};
