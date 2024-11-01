import type { Meta, StoryObj } from '@storybook/react';

import CheckboxExample from './CheckboxExample';

const meta: Meta<typeof CheckboxExample> = {
  title: 'Inputs/Checkbox',
  component: CheckboxExample,
};

export default meta;
type Story = StoryObj<typeof CheckboxExample>;

export const LeftIconCheckbox: Story = {
  args: {
    id: 'accept-terms-checkbox',
    name: 'isTermsAccepted',
    label: 'Accept Terms and Conditions',
    required: true,
    disabled: false,
    noLabel: false,
    defaultChecked: false,
    iconPosition: 'left',
    theme: 'light',
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
  },
};

export const RightIconCheckbox: Story = {
  args: {
    id: 'accept-terms-checkbox',
    name: 'isTermsAccepted',
    label: 'Accept Terms and Conditions',
    required: false,
    disabled: false,
    noLabel: false,
    defaultChecked: false,
    iconPosition: 'right',
    theme: 'light',
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
  },
};

export const NoLabelCheckbox: Story = {
  args: {
    id: 'accept-terms-checkbox',
    name: 'isTermsAccepted',
    label: 'Accept Terms and Conditions',
    required: false,
    disabled: false,
    noLabel: true,
    defaultChecked: true,
    theme: 'light',
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
    },
  },
};
