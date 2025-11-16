import type { Meta, StoryObj } from '@storybook/react-vite';

import ErrorMessage from '../ErrorMessage';

const meta: Meta<typeof ErrorMessage> = {
  title: 'Atoms/ErrorMessage',
  component: ErrorMessage,
  argTypes: {
    errorId: {
      control: 'text',
      description: 'Unique ID for the error message, used for accessibility with aria-describedby',
    },
    visible: {
      control: 'boolean',
      description: 'Controls whether the error message is visible',
    },
    message: {
      control: 'text',
      description: 'The error message text to display',
    },
    testId: {
      control: 'text',
      description: 'Test ID used for automated testing',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names for custom styling',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
  args: {
    errorId: 'error-id',
    visible: true,
    message: 'Incorrect value',
    testId: 'test-id',
    className: 'test-class',
  },
};
