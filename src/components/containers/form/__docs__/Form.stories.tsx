import type { Meta, StoryObj } from '@storybook/react';

import FormExample from './FormExample';

const meta: Meta<typeof FormExample> = {
  title: 'Containers/Form',
  component: FormExample,
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
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof FormExample>;

export const Default: Story = {};
