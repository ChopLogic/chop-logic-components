import { ChopLogicLoaderView } from '@enums';
import type { Meta, StoryObj } from '@storybook/react';

import LoaderExample from './Loader.example.tsx';

const meta: Meta<typeof LoaderExample> = {
  title: 'Elements/Loader',
  component: LoaderExample,
  argTypes: {
    view: {
      control: 'select',
      options: Object.values(ChopLogicLoaderView),
    },
  },
};

export default meta;

type Story = StoryObj<typeof LoaderExample>;

export const LoaderGallery: Story = {};
