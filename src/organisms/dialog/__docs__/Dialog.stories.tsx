import type { Meta, StoryObj } from '@storybook/react-vite';

import ChopLogicDialog from '../Dialog';
import { ChopLogicDialogExample } from './Dialog.example';

const meta: Meta<typeof ChopLogicDialog> = {
  component: ChopLogicDialogExample,
  title: 'Organisms/Dialog',
};

export default meta;
type Story = StoryObj<typeof ChopLogicDialog>;

export const Example: Story = {};
