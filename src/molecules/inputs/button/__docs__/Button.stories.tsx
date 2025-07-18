import { ChopLogicButtonView, ChopLogicIconName } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { ChopLogicButtonExample } from './Button.example';

const meta: Meta<typeof ChopLogicButtonExample> = {
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
    icon: {
      control: 'select',
      options: Object.values(ChopLogicIconName),
    },
    view: {
      control: 'select',
      options: Object.values(ChopLogicButtonView),
    },
    extended: { control: 'boolean' },
  },
  args: {
    text: 'Button',
    type: 'button',
    view: ChopLogicButtonView.Primary,
    disabled: false,
    extended: false,
  },
  component: ChopLogicButtonExample,
  title: 'Molecules/Button',
};

export default meta;
type Story = StoryObj<typeof ChopLogicButtonExample>;

export const PrimaryButton: Story = {
  args: {
    text: 'Copy',
    view: ChopLogicButtonView.Primary,
    icon: ChopLogicIconName.Copy,
    type: 'button',
    disabled: false,
  },
};

export const SecondaryButton: Story = {
  args: {
    text: 'Learn more...',
    view: ChopLogicButtonView.Secondary,
    icon: ChopLogicIconName.Forward,
    type: 'button',
    disabled: false,
  },
};

export const IconButton: Story = {
  args: {
    view: ChopLogicButtonView.Icon,
    type: 'button',
    icon: ChopLogicIconName.Cancel,
    label: 'Cancel',
    disabled: false,
  },
};

export const ButtonWithTooltip: Story = {
  args: {
    text: 'Hover On Me',
    view: ChopLogicButtonView.Secondary,
    type: 'button',
    disabled: false,
    tooltip: 'This button does nothing...',
  },
};
