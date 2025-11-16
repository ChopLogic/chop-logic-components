import type { Meta, StoryObj } from '@storybook/react-vite';

import EditableText from '../EditableText';

const meta: Meta<typeof EditableText> = {
  title: 'Atoms/EditableText',
  component: EditableText,
  argTypes: {
    // Core props
    value: {
      control: 'text',
      description: 'The current text value of the editable field',
    },
    autoSelectTextOnEditMode: {
      control: 'boolean',
      description: 'Whether to automatically select all text when entering edit mode',
    },
    isEditMode: {
      control: 'boolean',
      description: 'Controls the edit mode state. Use undefined for internal state management',
    },
    multiline: {
      control: 'boolean',
      description: 'Whether the component should allow multi-line text input',
    },
    onChange: {
      action: 'changed',
      description: 'Callback function called when the text value changes',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback function called when the component is clicked',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when the value is empty',
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the text is read-only and cannot be edited',
    },

    // ChopLogicComponentProps
    id: {
      control: 'text',
      description: 'Unique identifier for the component',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names to apply to the component',
    },
    style: {
      control: 'object',
      description: 'Inline CSS styles to apply to the component',
    },
    tabIndex: {
      control: 'number',
      description: 'Tab index for keyboard navigation',
    },
    title: {
      control: 'text',
      description: 'Tooltip text shown on hover',
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
