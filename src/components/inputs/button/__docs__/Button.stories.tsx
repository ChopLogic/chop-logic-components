import type { Meta, StoryObj } from '@storybook/react';

import { ChopLogicButtonView, ChopLogicIconName } from '@/enums';

import ButtonExample from './ButtonExample';

const meta: Meta<typeof ButtonExample> = {
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
    icon: ChopLogicIconName.Copy,
    view: ChopLogicButtonView.Primary,
    disabled: false,
    extended: false,
  },
  component: ButtonExample,
  title: 'Inputs/Button',
};

export default meta;
type Story = StoryObj<typeof ButtonExample>;

export const DefaultButton: Story = {
  args: {
    text: 'Copy',
    view: ChopLogicButtonView.Primary,
    icon: ChopLogicIconName.Copy,
    type: 'button',
    disabled: false,
  },
};

export const FlatButton: Story = {
  args: {
    text: 'Learn more...',
    view: ChopLogicButtonView.Flat,
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

export const WithTooltipButton: Story = {
  args: {
    text: 'Hover On Me',
    view: ChopLogicButtonView.Flat,
    icon: ChopLogicIconName.Forward,
    type: 'button',
    disabled: false,
    tooltip: 'This button does nothing',
  },
};
