import React, { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useContainerDimensions } from 'hooks/index';

const ExampleComponent: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { width, height } = useContainerDimensions({ ref, isVisible: true });

  return (
    <div ref={ref} style={{ width: '200px', height: '150px', border: '1px solid black' }}>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
};

const meta: Meta<typeof ExampleComponent> = {
  title: 'Hooks/useContainerDimensions',
  component: ExampleComponent,
};

export default meta;
type Story = StoryObj<typeof ExampleComponent>;

export const Default: Story = {};
