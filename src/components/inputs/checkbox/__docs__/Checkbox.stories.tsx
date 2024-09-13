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
    isLabelHidden: false,
    defaultChecked: false,
    iconPosition: 'left',
  },
  argTypes: {
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
    isLabelHidden: false,
    defaultChecked: false,
    iconPosition: 'right',
  },
  argTypes: {
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
    isLabelHidden: true,
    defaultChecked: true,
  },
};
