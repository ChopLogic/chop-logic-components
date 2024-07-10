import type { Meta, StoryObj } from '@storybook/react';
import ButtonExample from './ButtonExample';
import { Icon } from 'enums/icon';

const meta: Meta<typeof ButtonExample> = {
  title: 'Controls/Button',
  component: ButtonExample,
};

export default meta;
type Story = StoryObj<typeof ButtonExample>;

export const Primary: Story = {
  args: {
    text: 'Copy',
    view: 'primary',
    icon: Icon.Copy,
    type: 'button',
    disabled: false,
    onClick: () => console.log('Copy clicked'),
  },
};
