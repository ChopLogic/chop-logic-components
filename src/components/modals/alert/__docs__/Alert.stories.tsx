import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ChopLogicAlert from '../Alert';
import { ChopLogicAlertProps } from '../types';

const ExampleComponent: React.FC<ChopLogicAlertProps> = (props) => {
  const [isOpened, setIsOpened] = useState(true);

  const handleClose = () => setIsOpened(false);

  return <ChopLogicAlert {...props} isOpened={isOpened} onClose={handleClose} />;
};

const meta: Meta<typeof ExampleComponent> = {
  title: 'Modals/Alert',
  component: ExampleComponent,
  args: {
    isOpened: true,
    title: 'Alert Title',
    message: 'This is an alert message.',
    mode: 'info',
    onClose: () => {},
  },
  argTypes: {
    isOpened: { control: 'boolean' },
    title: { control: 'text' },
    message: { control: 'text' },
    mode: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ExampleComponent>;

export const Default: Story = {};
