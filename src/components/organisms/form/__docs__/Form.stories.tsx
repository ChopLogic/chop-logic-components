import type { Meta, StoryObj } from '@storybook/react-vite';

import type Form from '../Form';
import { FormExample, FormWithActionExample } from './Form.example';

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
        type: { summary: 'FormValues' },
        category: 'State',
      },
    },
    // Behavior
    hasReset: {
      control: 'boolean',
      description: 'Whether to show the reset button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Behavior',
      },
    },
    resetOnSuccess: {
      control: 'boolean',
      description: 'Reset form to initial values after successful submission',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    // Interaction
    onSubmit: {
      action: 'submitted',
      description: 'Controlled flow: callback receiving typed FormValues on submit',
      table: {
        type: { summary: '(data: FormValues) => void | Promise<void>' },
        category: 'Interaction',
      },
    },
    action: {
      description: 'Action flow: React 19 form action receiving (prevState, FormData)',
      table: {
        type: { summary: '(prevState: T, formData: FormData) => T | Promise<T>' },
        category: 'Interaction',
      },
    },
    actionInitialState: {
      description: 'Action flow: an initial state for useActionState hooks',
      table: {
        type: { summary: 'Awaited<TActionState>' },
        category: 'Interaction',
      },
    },
    onActionComplete: {
      description: 'Callback fired with the action result state after action completes',
      table: {
        type: { summary: '(state: T) => void' },
        category: 'Interaction',
      },
    },
    onReset: {
      action: 'reset',
      description: 'Custom reset handler called when reset button is clicked',
      table: {
        type: { summary: 'FormEventHandler<HTMLFormElement>' },
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

export const Default: Story = {};

export const WithAction: Story = {
  render: () => <FormWithActionExample />,
  parameters: {
    docs: {
      description: {
        story:
          'Uses React 19 action flow with a simulated 2-second async submission. The form shows a pending state with disabled inputs during submission.',
      },
    },
  },
};

export const WithResetOnSuccess: Story = {
  args: {
    resetOnSuccess: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Form resets all fields to initial values after a successful submission.',
      },
    },
  },
};
