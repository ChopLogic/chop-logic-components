import { ChopLogicAlertMode, ChopLogicIconName } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlertExample } from './Alert.example';

const meta: Meta<typeof AlertExample> = {
  argTypes: {
    title: { control: 'text' },
    message: { control: 'text' },
    mode: {
      control: 'select',
      options: Object.values(ChopLogicAlertMode),
    },
    icon: {
      control: 'select',
      options: Object.values(ChopLogicIconName),
    },
  },
  args: {
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    mode: ChopLogicAlertMode.Info,
  },
  component: AlertExample,
  title: 'Organisms/Alert',
};

export default meta;
type Story = StoryObj<typeof AlertExample>;

export const Example: Story = {};
