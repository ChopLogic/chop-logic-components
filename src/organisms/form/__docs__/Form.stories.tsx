import type { Meta, StoryObj } from '@storybook/react-vite';

import ChopLogicForm from '../Form.tsx';
import { FormExample } from './Form.example.tsx';

const meta: Meta<typeof ChopLogicForm> = {
  args: {
    columns: 2,
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

type Story = StoryObj<typeof ChopLogicForm>;

export const Example: Story = {};
