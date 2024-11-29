import React, { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { useKeyPress } from '@/hooks';

const ExampleComponent: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleKeyPress = () => {
    console.log('Key pressed!');
  };

  useKeyPress({ ref, keyCode: 'Enter', onKeyPress: handleKeyPress });

  return (
    <div ref={ref} tabIndex={0} style={{ padding: '20px', border: '1px solid black' }}>
      Press Enter key
    </div>
  );
};

const meta: Meta<typeof ExampleComponent> = {
  component: ExampleComponent,
  title: 'Hooks/useKeyPress',
};

export default meta;
type Story = StoryObj<typeof ExampleComponent>;

export const Default: Story = {};
