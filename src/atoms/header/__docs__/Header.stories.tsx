import { ChopLogicIconName } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import ChopLogicHeader from '../Header';

const meta: Meta<typeof ChopLogicHeader> = {
  title: 'Atoms/Header',
  component: ChopLogicHeader,
};

export default meta;

type Story = StoryObj<typeof ChopLogicHeader>;

export const Default: Story = {
  args: {
    as: 'h1',
    children: 'Default h1 Header',
    icon: ChopLogicIconName.Home,
    className: 'header-class',
    id: 'header-id',
  },
};
