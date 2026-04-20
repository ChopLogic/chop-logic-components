import type { Meta, StoryObj } from '@storybook/react-vite';

import { WithErrorBoundaryExample } from './with-error-boundary.example';

const meta: Meta<typeof WithErrorBoundaryExample> = {
  component: WithErrorBoundaryExample,
  title: 'Utilities/withErrorBoundary',
  args: {
    label: 'Wrapped content renders here',
    simulateThrow: false,
    errorMessage: undefined,
  },
  argTypes: {
    errorMessage: {
      control: 'text',
      description:
        'Optional message passed to ErrorMessage when an error is caught (defaults to the atom default text when omitted)',
      table: {
        type: { summary: 'string | undefined' },
        category: 'HOC',
      },
    },
    onError: {
      control: false,
      description: 'Optional callback invoked once in componentDidCatch after an error is caught',
      table: {
        type: { summary: '(() => void) | undefined' },
        category: 'HOC',
      },
    },
    simulateThrow: {
      control: 'boolean',
      description:
        'Demo-only: when true, the inner demo component throws during render so you can see the fallback UI',
      table: {
        type: { summary: 'boolean' },
        category: 'Demo',
      },
    },
    label: {
      control: 'text',
      description: 'Demo-only: Example prop forwarded to the wrapped demo component',
      table: {
        type: { summary: 'string' },
        category: 'Wrapped component',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof WithErrorBoundaryExample>;

export const Default: Story = {};

export const WhenChildThrows: Story = {
  args: {
    simulateThrow: true,
    label: 'This label is not shown',
  },
};

export const CustomFallbackMessage: Story = {
  args: {
    simulateThrow: true,
    errorMessage: 'Something went wrong. Please try again later.',
    label: 'This label is not shown',
  },
};

export const WithOnErrorCallback: Story = {
  args: {
    simulateThrow: true,
    errorMessage: 'Handled with logging',
    onError: () => console.info('[withErrorBoundary Story] onError'),
    label: 'This label is not shown',
  },
};
