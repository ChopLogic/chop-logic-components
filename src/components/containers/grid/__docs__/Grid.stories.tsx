import type { Meta, StoryObj } from '@storybook/react';

import GridExample from './GridExample';

const meta: Meta<typeof GridExample> = {
  title: 'Containers/Grid',
  component: GridExample,
  args: {
    selectable: true,
  },
  //   args: {
  //     columns: 2,
  //     hasReset: true,
  //     initialValues: {
  //       firstName: 'John',
  //       lastName: 'Doe',
  //       age: 42,
  //     },
  //     onClickSubmit: (data) => console.log(data),
  //   },
};

export default meta;

type Story = StoryObj<typeof GridExample>;

export const Default: Story = {};
