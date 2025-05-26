import { ChopLogicLoaderView } from '@enums';
import type { Meta, StoryObj } from '@storybook/react';
import LoaderExample from './Loader.example';

const meta: Meta<typeof LoaderExample> = {
  title: 'Atoms/Loader',
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
