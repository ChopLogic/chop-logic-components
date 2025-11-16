import { ButtonView, IconName } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from '../Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  args: {
    text: 'Button',
    type: 'button',
    view: ButtonView.Primary,
    disabled: false,
    extended: false,
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'The text content displayed on the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'The HTML button type attribute',
    },
    icon: {
      control: 'select',
      options: Object.values(IconName),
      description: 'Icon to display alongside the button text',
    },
    view: {
      control: 'select',
      options: Object.values(ButtonView),
      description: 'Visual style variant of the button',
    },
    extended: {
      control: 'boolean',
      description: 'Whether the button should take full available width',
    },
    tooltip: {
      control: 'text',
      description: 'Tooltip text shown on hover',
    },
    label: {
      control: 'text',
      description: 'Accessibility label for icon-only buttons',
    },
  },
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
