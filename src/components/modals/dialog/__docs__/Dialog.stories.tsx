import type { Meta, StoryObj } from '@storybook/react';

import DialogExample from './DialogExample';

const meta: Meta<typeof DialogExample> = {
  component: DialogExample,
  title: 'Modals/Dialog',
};

export default meta;
type Story = StoryObj<typeof DialogExample>;

export const Default: Story = {
  args: {
    isOpened: false,
    onClose: () => console.log('Dialog closed'),
    title: 'Example Dialog',
  },
};
