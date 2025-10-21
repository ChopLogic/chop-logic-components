import type { Meta, StoryObj } from '@storybook/react-vite';

import type Checkbox from '../Checkbox';
import { CheckboxExample } from './Checkbox.example';

const meta: Meta<typeof Checkbox> = {
  component: CheckboxExample,
  title: 'Molecules/Checkbox',
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

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
    noLabel: false,
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
    noLabel: true,
    defaultChecked: true,
  },
};
