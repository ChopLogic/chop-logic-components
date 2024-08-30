import type { Meta, StoryObj } from '@storybook/react';

import FormExample from './FormExample';

const meta: Meta<typeof FormExample> = {
  title: 'Containers/Form',
  component: FormExample,
  args: {
    columns: 1,
    initialValues: {
      firstName: 'John',
      lastName: 'Doe',
    },
  },
};

export default meta;

type Story = StoryObj<typeof FormExample>;

export const Default: Story = {};
