import type { Meta, StoryObj } from '@storybook/react-vite';

import { UseModalFocusTrapExample } from './use-modal-focus-trap.example.tsx';

const meta: Meta<typeof UseModalFocusTrapExample> = {
  component: UseModalFocusTrapExample,
  title: 'Hooks/useModalFocusTrap',
};

export default meta;
type Story = StoryObj<typeof UseModalFocusTrapExample>;

export const Example: Story = {};
