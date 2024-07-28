import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import ChopLogicButton from 'components/controls/button/Button';

import ChopLogicAlert from '../Alert';
import { ChopLogicAlertProps } from '../types';

const ExampleComponent: React.FC<ChopLogicAlertProps> = (props) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => setIsOpened(true);
  const handleClose = () => setIsOpened(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: '20px',
      }}
    >
      <ChopLogicButton onClick={handleOpen} text='Open Alert' view='danger' />
      <ChopLogicAlert {...props} isOpened={isOpened} onClose={handleClose} />
    </div>
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
      options: ['success', 'error', 'warning', 'info', 'help'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ExampleComponent>;

export const Default: Story = {};
