import React, { useState } from 'react';
import { ChopLogicButton } from '@components';
import { ChopLogicAlertMode, ChopLogicIconName } from '@enums';
import { ChopLogicAlertProps } from '@models';
import type { Meta, StoryObj } from '@storybook/react';

import ChopLogicAlert from '../Alert';

const ExampleComponent: React.FC<ChopLogicAlertProps> = (props) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => setIsOpened(true);
  const handleClose = () => setIsOpened(false);

  return (
    <div>
      <ChopLogicButton onClick={handleOpen} text='Trigger Alert' />
      <ChopLogicAlert {...props} isOpened={isOpened} onClose={handleClose} />
    </div>
  );
};

const meta: Meta<typeof ExampleComponent> = {
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
  component: ExampleComponent,
  title: 'Modals/Alert',
};

export default meta;
type Story = StoryObj<typeof ExampleComponent>;

export const Example: Story = {};
