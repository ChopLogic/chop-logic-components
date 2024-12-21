import type { Meta, StoryObj } from '@storybook/react';

import IconExample from './Icon.example.tsx';

const meta: Meta<typeof IconExample> = {
  title: 'Elements/Icon',
  component: IconExample,
};

export default meta;

type Story = StoryObj<typeof IconExample>;

export const Default: Story = {};
