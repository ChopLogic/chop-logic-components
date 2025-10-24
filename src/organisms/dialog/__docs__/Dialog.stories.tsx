import { IconName } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import type Dialog from '../Dialog';
import { DialogExample } from './Dialog.example';

const meta: Meta<typeof Dialog> = {
  component: DialogExample,
  title: 'Organisms/Dialog',
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Example: Story = {
  args: {
    isOpened: false,
    title: 'Please read this dialog',
    icon: IconName.Help,
  },
};
