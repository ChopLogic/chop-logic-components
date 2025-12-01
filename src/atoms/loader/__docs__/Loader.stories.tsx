import { LoaderView } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import type Loader from '../Loader';
import { LoaderExample } from './Loader.example';

const meta: Meta<typeof Loader> = {
  title: 'Atoms/Loader',
  component: LoaderExample,
  argTypes: {
    view: {
      control: 'select',
      options: Object.values(LoaderView),
      description: 'The visual style variant of the loader',
      table: {
        defaultValue: { summary: LoaderView.Circle },
        type: { summary: 'LoaderView' },
        category: 'Styling',
      },
    },
    // HTML attributes
    id: {
      control: 'text',
      description: 'The unique ID for the search input (auto-generated if not provided)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'HTML Attributes',
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for the search wrapper',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'HTML Attributes',
      },
    },
    style: {
      control: 'object',
      description: 'Inline styles for the search wrapper',
      table: {
        type: { summary: 'CSSProperties' },
        defaultValue: { summary: 'undefined' },
        category: 'HTML Attributes',
      },
    },
    tabIndex: {
      control: 'number',
      description: 'Tab index for the search input',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
        category: 'HTML Attributes',
      },
    },
    title: {
      control: 'text',
      description: 'Title attribute for the search wrapper',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'HTML Attributes',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const LoaderGallery: Story = {};
