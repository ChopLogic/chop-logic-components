import React, { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { useTooltipPosition } from '..';

const ExampleComponent: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const wrapperRef = useRef(null);
  const tooltipRef = useRef(null);
  const { top, left } = useTooltipPosition({ wrapperRef, tooltipRef, isOpened });

  return (
    <div>
      <button onClick={() => setIsOpened(!isOpened)} ref={wrapperRef}>
        Click me
      </button>
      {isOpened && (
        <div
          ref={tooltipRef}
          style={{ position: 'absolute', top: `${top}px`, left: `${left}px`, border: '1px solid black', padding: '10px' }}
        >
          Tooltip Content
        </div>
      )}
    </div>
  );
};

const meta: Meta<typeof ExampleComponent> = {
  component: ExampleComponent,
  title: 'Hooks/useTooltipPosition',
};

export default meta;
type Story = StoryObj<typeof ExampleComponent>;

export const Default: Story = {};
