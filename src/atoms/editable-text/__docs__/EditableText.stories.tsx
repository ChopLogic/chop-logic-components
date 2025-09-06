import type { Meta, StoryObj } from '@storybook/react-vite';

import ChopLogicEditableText from '../EditableText';

const meta: Meta<typeof ChopLogicEditableText> = {
  title: 'Atoms/EditableText',
  component: ChopLogicEditableText,
};

export default meta;

type Story = StoryObj<typeof ChopLogicEditableText>;

export const Default: Story = {
  args: {
    value: 'Text to edit',
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
