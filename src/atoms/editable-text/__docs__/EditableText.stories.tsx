import type { Meta, StoryObj } from '@storybook/react-vite';

import EditableText from '../EditableText';

const meta: Meta<typeof EditableText> = {
  title: 'Atoms/EditableText',
  component: EditableText,
  argTypes: {
    // Content
    value: {
      control: 'text',
      description: 'The current text value of the editable field',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when the value is empty',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    // State
    isEditMode: {
      control: 'boolean',
      description: 'Controls the edit mode state. Use undefined for internal state management',
      table: {
        type: { summary: 'boolean | undefined' },
        category: 'State',
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the text is read-only and cannot be edited',
      table: {
        type: { summary: 'boolean' },
        category: 'State',
      },
    },
    // Behavior
    multiline: {
      control: 'boolean',
      description: 'Whether the component should allow multi-line text input',
      table: {
        type: { summary: 'boolean' },
        category: 'Behavior',
      },
    },
    autoSelectTextOnEditMode: {
      control: 'boolean',
      description: 'Whether to automatically select all text when entering edit mode',
      table: {
        type: { summary: 'boolean' },
        category: 'Behavior',
      },
    },
    // Interaction
    onChange: {
      action: 'changed',
      description: 'Callback function called when the text value changes',
      table: {
        type: { summary: '(value: string) => void' },
        category: 'Interaction',
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Callback function called when the component is clicked',
      table: {
        type: { summary: '(event: React.MouseEvent) => void' },
        category: 'Interaction',
      },
    },
    title: {
      control: 'text',
      description: 'Tooltip text shown on hover',
      table: {
        type: { summary: 'string' },
        category: 'Interaction',
      },
    },
    // Styling
    className: {
      control: 'text',
      description: 'Additional CSS class names to apply to the component',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
    style: {
      control: 'object',
      description: 'Inline CSS styles to apply to the component',
      table: {
        type: { summary: 'CSSProperties' },
        category: 'Styling',
      },
    },
    // Identification & Accessibility
    id: {
      control: 'text',
      description: 'Unique identifier for the component',
      table: {
        type: { summary: 'string' },
        category: 'Identification',
      },
    },
    tabIndex: {
      control: 'number',
      description: 'Tab index for keyboard navigation',
      table: {
        type: { summary: 'number' },
        category: 'Accessibility',
      },
    },
  },
  args: {
    value: 'Click on the text to edit',
    id: 'editable-text',
    autoSelectTextOnEditMode: false,
    multiline: false,
    onChange: (value: string) => console.log('Changed to:', value),
    onClick: () => console.log('EditableText is clicked'),
    placeholder: 'Click on the text to edit',
    readOnly: false,
    className: 'test-class',
    isEditMode: undefined,
  },
};

export default meta;

type Story = StoryObj<typeof EditableText>;

export const Default: Story = {};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: 'This text is read-only',
  },
};
