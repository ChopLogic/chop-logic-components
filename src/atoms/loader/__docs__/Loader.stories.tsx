import { ChopLogicLoaderView } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import ChopLogicLoader from '../Loader';
import { LoaderExample } from './Loader.example';

const meta: Meta<typeof ChopLogicLoader> = {
  title: 'Atoms/Loader',
  component: LoaderExample,
  argTypes: {
    view: {
      control: 'select',
      options: Object.values(ChopLogicLoaderView),
      table: {
        defaultValue: { summary: ChopLogicLoaderView.Circle },
        type: { summary: 'ChopLogicLoaderView' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ChopLogicLoader>;

export const LoaderGallery: Story = {};
