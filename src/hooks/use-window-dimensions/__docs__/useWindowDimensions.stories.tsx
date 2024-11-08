import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { useWindowDimensions } from '..';

const ExampleComponent: React.FC = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div>
      <p>Window width: {width}px</p>
      <p>Window height: {height}px</p>
    </div>
  );
};

const meta: Meta<typeof ExampleComponent> = {
  component: ExampleComponent,
  title: 'Hooks/useWindowDimensions',
};

export default meta;
type Story = StoryObj<typeof ExampleComponent>;

export const Default: Story = {};
