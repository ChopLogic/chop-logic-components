import type { Meta, StoryObj } from '@storybook/react-vite';

import TextInputExample from './TextInput.example.tsx';

const meta: Meta<typeof TextInputExample> = {
  component: TextInputExample,
  title: 'Inputs/TextInput',
};

export default meta;
type Story = StoryObj<typeof TextInputExample>;

export const DefaultTextInput: Story = {
  args: {
    placeholder: 'Type here...',
    label: 'Enter the formula',
    name: 'formula',
    id: 'formula-input',
    type: 'text',
    required: false,
    disabled: false,
    clearable: true,
    errorMessage: 'Only latin letters are allowed',
    validator: { regexp: '^[A-Za-z ]+$' },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password'],
    },
    validator: { control: 'object' },
  },
};

export const PasswordInput: Story = {
  args: {
    placeholder: 'Enter your password',
    label: 'Password',
    name: 'pwd',
    id: 'pwd-input',
    type: 'password',
    required: true,
    disabled: false,
    clearable: false,
    errorMessage: 'Your password should contain at least 6 characters',
    validator: (input) => input.length > 6,
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password'],
    },
    validator: { control: 'object' },
  },
};

export const EmailInput: Story = {
  args: {
    placeholder: 'Enter your email',
    label: 'Email',
    name: 'email',
    id: 'email-input',
    type: 'email',
    required: true,
    disabled: false,
    clearable: true,
    errorMessage: 'This is not a valid email',
    // eslint-disable-next-line no-useless-escape
    validator: { regexp: `^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$` },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password'],
    },
    validator: { control: 'object' },
  },
};
