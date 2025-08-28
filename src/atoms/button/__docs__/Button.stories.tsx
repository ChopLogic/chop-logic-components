import { ButtonView, IconName } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from '../Button';
import { ButtonExample } from './Button.example';

const meta: Meta<typeof Button> = {
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
    icon: {
      control: 'select',
      options: Object.values(IconName),
    },
    view: {
      control: 'select',
      options: Object.values(ButtonView),
    },
    extended: { control: 'boolean' },
  },
  args: {
    text: 'Button',
    type: 'button',
    view: ButtonView.Primary,
    disabled: false,
    extended: false,
  },
  component: ButtonExample,
  title: 'Atoms/Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: 'Copy',
    view: ButtonView.Primary,
    icon: IconName.Copy,
  },
};

export const Secondary: Story = {
  args: {
    text: 'Learn more...',
    view: ButtonView.Secondary,
    icon: IconName.Forward,
  },
};

export const Icon: Story = {
  args: {
    view: ButtonView.Icon,
    icon: IconName.Cancel,
    label: 'Cancel',
  },
};

export const WithTooltip: Story = {
  args: {
    text: 'Hover On Me',
    view: ButtonView.Secondary,
    tooltip: 'This button does nothing...',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled',
    view: ButtonView.Primary,
    icon: IconName.Clear,
    disabled: true,
  },
};
