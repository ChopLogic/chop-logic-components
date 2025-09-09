import { IconName } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Icon from '../Icon';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  args: {
    name: IconName.Home,
    title: 'Home icon',
    id: 'icon-id',
    className: 'icon-class',
    style: { width: '36px', height: '36px' },
    testId: 'icon-test-id',
  },
  argTypes: {
    name: {
      control: 'select',
      options: Object.values(IconName),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {};
