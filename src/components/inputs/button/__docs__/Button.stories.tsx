import type { Meta, StoryObj } from '@storybook/react';

import { CLIcon } from 'components/misc/icon/types';

import ButtonExample from './ButtonExample';

const meta: Meta<typeof ButtonExample> = {
  title: 'Inputs/Button',
  component: ButtonExample,
};

export default meta;
type Story = StoryObj<typeof ButtonExample>;

export const PrimaryButton: Story = {
  args: {
    text: 'Copy',
    view: 'primary',
    icon: CLIcon.Copy,
    type: 'button',
    disabled: false,
  },
};

export const SecondaryButton: Story = {
  args: {
    text: 'Learn more...',
    view: 'secondary',
    icon: CLIcon.Forward,
    type: 'button',
    disabled: false,
  },
};

export const DangerButton: Story = {
  args: {
    text: 'Delete',
    view: 'danger',
    icon: CLIcon.Delete,
    type: 'button',
    disabled: false,
  },
};

export const IconButton: Story = {
  args: {
    view: 'icon',
    type: 'button',
    icon: CLIcon.Cancel,
    label: 'Cancel',
    disabled: false,
  },
};

export const DisabledButton: Story = {
  args: {
    text: 'Copy',
    view: 'primary',
    icon: CLIcon.Copy,
    type: 'button',
    disabled: true,
  },
};
