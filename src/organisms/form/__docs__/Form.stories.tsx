import type { Meta, StoryObj } from '@storybook/react-vite';

import type Form from '../Form';
import { FormExample } from './Form.example';

const meta: Meta<typeof Form> = {
  component: FormExample,
  title: 'Organisms/Form',
  args: {
    hasReset: true,
    initialValues: {
      firstName: 'John',
      lastName: 'Doe',
      age: 42,
    },
    onClickSubmit: (data) => console.log(data),
  },
  argTypes: {
    initialValues: {
      control: 'object',
      description: 'Initial values for form fields (key-value pairs)',
    },
    hasReset: {
      control: 'boolean',
      description: 'Whether to enable form reset functionality',
    },
    onClickSubmit: {
      action: 'submitted',
      description: 'Callback function called when form is submitted',
    },
    onReset: {
      description: 'Custom reset handler (overrides default reset behavior)',
    },
    onSubmit: {
      description: 'Custom submit handler (overrides default submit behavior)',
    },
    children: {
      control: 'text',
      description: 'Form content including input fields and buttons',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for custom styling',
    },
    id: {
      control: 'text',
      description: 'Unique identifier for the form',
    },
    style: {
      control: 'object',
      description: 'Inline CSS styles for the form container',
    },
    title: {
      control: 'text',
      description: 'Accessibility title for the form',
    },
    tabIndex: {
      control: 'number',
      description: 'Tab index for keyboard navigation',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Example: Story = {};
