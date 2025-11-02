import type { Meta, StoryObj } from '@storybook/react-vite';

import type Form from '../Form';
import { FormExample } from './Form.example';

const meta: Meta<typeof Form> = {
  args: {
    hasReset: true,
    initialValues: {
      firstName: 'John',
      lastName: 'Doe',
      age: 42,
    },
    onClickSubmit: (data) => console.log(data),
  },
  component: FormExample,
  title: 'Organisms/Form',
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Example: Story = {};
