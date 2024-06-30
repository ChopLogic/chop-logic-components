import type { Meta, StoryObj } from '@storybook/react';
import ExampleButton from './ButtonExample';
import { Icon } from 'enums/icon';

const meta: Meta<typeof ExampleButton> = {
  title: 'Button',
  component: ExampleButton,
};

export default meta;
type Story = StoryObj<typeof ExampleButton>;

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
