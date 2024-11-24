import type { Meta, StoryObj } from '@storybook/react';

import { ChopLogicIconName } from 'components/misc/icon/Icon';

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
      options: ['3D', 'flat', 'icon'],
    },
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
    },
    extended: { control: 'boolean' },
  },
  args: {
    text: 'Button',
    type: 'button',
    icon: ChopLogicIconName.Copy,
    view: '3D',
    disabled: false,
    theme: 'light',
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
    view: '3D',
    icon: ChopLogicIconName.Copy,
    type: 'button',
    disabled: false,
    theme: 'light',
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
    },
  },
};

export const FlatButton: Story = {
  args: {
    text: 'Learn more...',
    view: 'flat',
    icon: ChopLogicIconName.Forward,
    type: 'button',
    disabled: false,
    theme: 'light',
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
    },
  },
};

export const IconButton: Story = {
  args: {
    view: 'icon',
    type: 'button',
    icon: ChopLogicIconName.Cancel,
    label: 'Cancel',
    disabled: false,
    theme: 'light',
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
    },
  },
};
