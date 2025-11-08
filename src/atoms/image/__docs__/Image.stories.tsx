import type { Meta, StoryObj } from '@storybook/react';
import Image from '../Image';

const meta: Meta<typeof Image> = {
  title: 'Atoms/Image',
  component: Image,
  argTypes: {
    src: {
      control: 'text',
      description: 'The main image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alternative text description for accessibility',
    },
    caption: {
      control: 'text',
      description: 'Optional caption displayed below the image',
    },
    width: {
      control: 'text',
      description: 'Width of the image (pixels or percentage)',
    },
    height: {
      control: 'text',
      description: 'Height of the image (pixels or percentage)',
    },
    aspectRatio: {
      control: 'text',
      description: 'Aspect ratio (e.g., "16/9", "4/3", "1")',
    },
    loading: {
      control: 'select',
      options: ['lazy', 'eager'],
      description: 'Loading behavior',
    },
    decoding: {
      control: 'select',
      options: ['sync', 'async', 'auto'],
      description: 'Decoding behavior',
    },
    decorative: {
      control: 'boolean',
      description: 'Whether the image is decorative (hides alt text from screen readers)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for custom styling',
    },
    onError: {
      control: 'object',
      description: 'An optional callback function triggered on image load error',
    },
  },
  args: {
    src: 'https://picsum.photos/400/300',
    alt: 'Example image description',
    loading: 'lazy',
    decoding: 'async',
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: 'https://picsum.photos/400/300',
    alt: 'A beautiful landscape with mountains and lake',
  },
};

export const WithCaption: Story = {
  args: {
    src: 'https://picsum.photos/400/300',
    alt: 'City skyline at sunset',
    caption: 'Downtown city skyline during golden hour',
  },
};

export const WithAspectRatio: Story = {
  args: {
    src: 'https://picsum.photos/400/300',
    alt: 'Widescreen image',
    aspectRatio: '16/9',
    width: '100%',
  },
};

export const ResponsiveWithSources: Story = {
  args: {
    src: 'https://picsum.photos/800/600',
    alt: 'Responsive image example',
    sources: [
      {
        src: 'https://picsum.photos/400/300',
        descriptor: '400w',
        media: '(max-width: 480px)',
      },
      {
        src: 'https://picsum.photos/800/600',
        descriptor: '800w',
        media: '(max-width: 1024px)',
      },
      {
        src: 'https://picsum.photos/1200/900',
        descriptor: '1200w',
      },
    ],
    sizes: '(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px',
    caption: 'An example of a responsive image with multiple sources',
  },
};

export const WithErrorHandling: Story = {
  args: {
    src: 'https://picsum.photos/error',
    alt: 'Image with error handling',
    onError: () => console.log('Image failed to load, displaying fallback.'),
  },
};
