import { IconName } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Header from '../Header';

const meta: Meta<typeof Header> = {
  title: 'Atoms/Header',
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    as: 'h1',
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    icon: IconName.Documents,
    className: 'header-class',
    id: 'header-id',
  },
};
