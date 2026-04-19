import type { Meta, StoryObj } from '@storybook/react-vite';

import { WithFigureCaptionExample } from './with-figure-caption.example';

const meta: Meta<typeof WithFigureCaptionExample> = {
  component: WithFigureCaptionExample,
  title: 'Utilities/withFigureCaption',
  args: {
    src: 'https://picsum.photos/400/300',
    alt: 'Example photograph',
    caption: 'Figure caption rendered below the image',
  },
  argTypes: {
    caption: {
      control: 'text',
      description:
        'When non-empty (after trim), wraps the target in figure + figcaption; otherwise renders the child only',
      table: {
        type: { summary: 'string | undefined' },
        category: 'HOC',
      },
    },
    src: {
      control: 'text',
      description: 'Example `src` passed to the wrapped demo image',
      table: {
        type: { summary: 'string' },
        category: 'Wrapped component',
      },
    },
    alt: {
      control: 'text',
      description: 'Example `alt` passed to the wrapped demo image',
      table: {
        type: { summary: 'string' },
        category: 'Wrapped component',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof WithFigureCaptionExample>;

export const Default: Story = {};

export const WithoutCaption: Story = {
  args: {
    caption: undefined,
  },
};

export const WhitespaceCaptionIgnored: Story = {
  args: {
    caption: '   ',
  },
};
