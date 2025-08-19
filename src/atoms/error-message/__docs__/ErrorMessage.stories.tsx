import type { Meta, StoryObj } from '@storybook/react-vite';

import ErrorMessage from '../ErrorMessage';

const meta: Meta<typeof ErrorMessage> = {
  title: 'Atoms/ErrorMessage',
  component: ErrorMessage,
  tags: ['autodocs'],
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
