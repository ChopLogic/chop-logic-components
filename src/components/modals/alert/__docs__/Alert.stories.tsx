import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ChopLogicAlert from '../Alert';
import { ChopLogicAlertProps } from '../types';
import ChopLogicButton from 'components/controls/button/Button';

const ExampleComponent: React.FC<ChopLogicAlertProps> = (props) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => setIsOpened(true);
  const handleClose = () => setIsOpened(false);

  return (
    <>
      <ChopLogicButton onClick={handleOpen} text='Toggle Alert' view='danger' />
      <ChopLogicAlert {...props} isOpened={isOpened} onClose={handleClose} />
    </>
  );
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
