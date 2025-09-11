import type { Meta, StoryObj } from '@storybook/react-vite';

import EditableText from '../EditableText';

const meta: Meta<typeof EditableText> = {
  title: 'Atoms/EditableText',
  component: EditableText,
};

export default meta;

type Story = StoryObj<typeof EditableText>;

export const Default: Story = {
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
