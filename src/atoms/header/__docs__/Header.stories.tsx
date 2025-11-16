import { IconName } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Header from '../Header';

const meta: Meta<typeof Header> = {
  title: 'Atoms/Header',
  component: Header,
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'The HTML heading level to render (h1-h6)',
    },
    children: {
      control: 'text',
      description: 'The header text content',
    },
    icon: {
      control: 'select',
      options: Object.values(IconName),
      description: 'Optional icon to display alongside the header',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names for custom styling',
    },
    id: {
      control: 'text',
      description: 'Unique identifier for the header element',
    },
  },
  args: {
    as: 'h1',
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    icon: IconName.Documents,
    className: 'header-class',
    id: 'header-id',
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Level1Header: Story = {};

export const Level6Header: Story = {
  args: {
    as: 'h6',
    children: 'This is a level 6 header',
  },
};
