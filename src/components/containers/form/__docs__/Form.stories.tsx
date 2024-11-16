import type { Meta, StoryObj } from '@storybook/react';

import FormExample from './FormExample';

const meta: Meta<typeof FormExample> = {
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
    },
  },
  args: {
    columns: 2,
    hasReset: true,
    initialValues: {
      firstName: 'John',
      lastName: 'Doe',
      age: 42,
    },
    onClickSubmit: (data) => console.log(data),
    theme: 'light',
  },
  component: FormExample,
  title: 'Containers/Form',
};

export default meta;

type Story = StoryObj<typeof FormExample>;

export const Default: Story = {};
