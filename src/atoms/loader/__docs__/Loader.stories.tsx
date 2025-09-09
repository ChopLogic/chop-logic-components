import { LoaderView } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Loader from '../Loader';
import { LoaderExample } from './Loader.example';

const meta: Meta<typeof Loader> = {
  title: 'Atoms/Loader',
  component: LoaderExample,
  argTypes: {
    view: {
      control: 'select',
      options: Object.values(LoaderView),
      table: {
        defaultValue: { summary: LoaderView.Circle },
        type: { summary: 'LoaderView' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const LoaderGallery: Story = {};
