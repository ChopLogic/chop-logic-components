import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from 'enums/icon';

import ButtonExample from './ButtonExample';

const meta: Meta<typeof ButtonExample> = {
  title: 'Controls/Button',
  component: ButtonExample,
};

export default meta;
type Story = StoryObj<typeof ButtonExample>;

export const PrimaryButton: Story = {
  args: {
    text: 'Copy',
    view: 'primary',
    icon: Icon.Copy,
    type: 'button',
    disabled: false,
  },
};

export const SecondaryButton: Story = {
  args: {
    text: 'Learn more...',
    view: 'secondary',
    type: 'button',
    disabled: false,
  },
};

export const DangerButton: Story = {
  args: {
    text: 'Delete',
    view: 'danger',
    icon: Icon.Delete,
    type: 'button',
    disabled: false,
  },
};

export const IconButton: Story = {
  args: {
    view: 'icon',
    type: 'button',
    icon: Icon.Cut,
    disabled: false,
  },
};

export const DisabledButton: Story = {
  args: {
    text: 'Copy',
    view: 'primary',
    icon: Icon.Copy,
    type: 'button',
    disabled: true,
  },
};
