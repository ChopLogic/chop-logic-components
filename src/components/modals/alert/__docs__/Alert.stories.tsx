import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ChopLogicButton } from '@/components';
import { ChopLogicAlertMode, ChopLogicIconName } from '@/enums';
import { ChopLogicAlertProps } from '@/types';

import ChopLogicAlert from '../Alert';

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
      <ChopLogicButton onClick={handleOpen} text='Open Alert' />
      <ChopLogicAlert {...props} isOpened={isOpened} onClose={handleClose} />
    </div>
  );
};

const meta: Meta<typeof ExampleComponent> = {
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
    },
    isOpened: { control: 'boolean' },
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
    isOpened: true,
    title: 'Alert Title',
    message: 'This is an alert message.',
    mode: ChopLogicAlertMode.Info,
    icon: ChopLogicIconName.Info,
    theme: 'light',
  },
  component: ExampleComponent,
  title: 'Modals/Alert',
};

export default meta;
type Story = StoryObj<typeof ExampleComponent>;

export const Default: Story = {};
