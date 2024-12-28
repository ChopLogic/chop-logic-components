import type { Meta, StoryObj } from '@storybook/react';

import UseModalFocusTrapExample from './useModalFocusTrap.example';

const meta: Meta<typeof UseModalFocusTrapExample> = {
  component: UseModalFocusTrapExample,
  title: 'Hooks/useModalFocusTrap',
};

export default meta;
type Story = StoryObj<typeof UseModalFocusTrapExample>;

export const Default: Story = {};
