import type { Meta, StoryObj } from '@storybook/react';

import FormExample from './FormExample';

const meta: Meta<typeof FormExample> = {
  title: 'Containers/Form',
  component: FormExample,
};

export default meta;

type Story = StoryObj<typeof FormExample>;

export const Default: Story = {};
