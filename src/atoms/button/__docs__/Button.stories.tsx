import { ButtonView, IconName } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import ChopLogicButton from '../Button.tsx';
import { ChopLogicButtonExample } from './Button.example.tsx';

const meta: Meta<typeof ChopLogicButton> = {
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
  component: ChopLogicButtonExample,
  title: 'Atoms/Button',
};

export default meta;
type Story = StoryObj<typeof ChopLogicButton>;

export const PrimaryButton: Story = {
  args: {
    text: 'Copy',
    view: ButtonView.Primary,
    icon: IconName.Copy,
    type: 'button',
    disabled: false,
  },
};

export const SecondaryButton: Story = {
  args: {
    text: 'Learn more...',
    view: ButtonView.Secondary,
    icon: IconName.Forward,
    type: 'button',
    disabled: false,
  },
};

export const IconButton: Story = {
  args: {
    view: ButtonView.Icon,
    type: 'button',
    icon: IconName.Cancel,
    label: 'Cancel',
    disabled: false,
  },
};

export const ButtonWithTooltip: Story = {
  args: {
    text: 'Hover On Me',
    view: ButtonView.Secondary,
    type: 'button',
    disabled: false,
    tooltip: 'This button does nothing...',
  },
};
