import { ChopLogicIconName } from '@enums';
import type { Meta, StoryObj } from '@storybook/react';

import IconExample from './Icon.example.tsx';

const meta: Meta<typeof IconExample> = {
  title: 'Atoms/Icon',
  component: IconExample,
  argTypes: {
    name: {
      control: 'select',
      options: Object.values(ChopLogicIconName),
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconExample>;

export const IconGallery: Story = {};
