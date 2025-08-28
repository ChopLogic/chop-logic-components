import type { Meta, StoryObj } from '@storybook/react-vite';

import ChopLogicEditableText from '../EditableText';

const meta: Meta<typeof ChopLogicEditableText> = {
  title: 'Atoms/EditableText',
  component: ChopLogicEditableText,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ChopLogicEditableText>;

export const Default: Story = {
  args: {
    value: 'Text to edit',
  },
};
