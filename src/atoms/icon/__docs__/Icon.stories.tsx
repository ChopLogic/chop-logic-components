import { ChopLogicIconName } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';
import ChopLogicIcon from '../Icon';

const meta: Meta<typeof ChopLogicIcon> = {
  title: 'Atoms/Icon',
  component: ChopLogicIcon,
  args: {
    name: ChopLogicIconName.Home,
    title: 'Home icon',
    id: 'icon-id',
    className: 'icon-class',
    style: { width: '36px', height: '36px' },
    testId: 'icon-test-id',
  },
  argTypes: {
    name: {
      control: 'select',
      options: Object.values(ChopLogicIconName),
    },
  },
};

export default meta;

type Story = StoryObj<typeof ChopLogicIcon>;

export const Default: Story = {};
