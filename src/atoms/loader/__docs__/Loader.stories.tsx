import { ChopLogicLoaderView } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';
import LoaderExample from './Loader.example.tsx';

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
