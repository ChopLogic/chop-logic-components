import type { Meta, StoryObj } from '@storybook/react';
import Example from './DialogExample';

const meta: Meta<typeof Example> = {
  title: 'Dialog',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    isOpened: false,
    onClose: () => console.log('Dialog closed'),
    title: 'Example Dialog',
  },
};
