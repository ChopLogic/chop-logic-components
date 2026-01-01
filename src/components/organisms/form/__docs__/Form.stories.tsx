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
    // Content
    children: {
      control: 'text',
      description: 'Form content including input fields and buttons',
      table: {
        type: { summary: 'ReactNode' },
        category: 'Content',
      },
    },
    // State
    initialValues: {
      control: 'object',
      description: 'Initial values for form fields (key-value pairs)',
      table: {
        type: { summary: 'Record<string, any>' },
        category: 'State',
      },
    },
    // Behavior
    hasReset: {
      control: 'boolean',
      description: 'Whether to enable form reset functionality',
      table: {
        type: { summary: 'boolean' },
        category: 'Behavior',
      },
    },
    // Interaction
    onClickSubmit: {
      action: 'submitted',
      description: 'Callback function called when form is submitted',
      table: {
        type: { summary: '(data: Record<string, any>) => void' },
        category: 'Interaction',
      },
    },
    onReset: {
      action: 'reset',
      description: 'Custom reset handler (overrides default reset behavior)',
      table: {
        type: { summary: '() => void' },
        category: 'Interaction',
      },
    },
    onSubmit: {
      action: 'submit',
      description: 'Custom submit handler (overrides default submit behavior)',
      table: {
        type: { summary: '(data: Record<string, any>) => void' },
        category: 'Interaction',
      },
    },
    // Styling
    className: {
      control: 'text',
      description: 'Additional CSS class for custom styling',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
    style: {
      control: 'object',
      description: 'Inline CSS styles for the form container',
      table: {
        type: { summary: 'CSSProperties' },
        category: 'Styling',
      },
    },
    // Identification
    id: {
      control: 'text',
      description: 'Unique identifier for the form',
      table: {
        type: { summary: 'string' },
        category: 'Identification',
      },
    },
    title: {
      control: 'text',
      description: 'Accessibility title for the form',
      table: {
        type: { summary: 'string' },
        category: 'Identification',
      },
    },
    // Accessibility
    tabIndex: {
      control: 'number',
      description: 'Tab index for keyboard navigation',
      table: {
        type: { summary: 'number' },
        category: 'Accessibility',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Example: Story = {};
