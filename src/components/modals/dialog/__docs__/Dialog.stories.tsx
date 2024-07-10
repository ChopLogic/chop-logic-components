import type { Meta, StoryObj } from '@storybook/react';
import DialogExample from './DialogExample';

const meta: Meta<typeof DialogExample> = {
  title: 'Modals/Dialog',
  component: DialogExample,
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
