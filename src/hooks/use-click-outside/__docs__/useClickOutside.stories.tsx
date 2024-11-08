import React, { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { useClickOutside } from '..';

const ExampleComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useClickOutside({
    ref,
    onClickOutsideHandler: () => setIsOpen(false),
  });

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open</button>
      {isOpen && <div ref={ref}>Click outside me to close</div>}
    </div>
  );
};

const meta: Meta<typeof ExampleComponent> = {
  component: ExampleComponent,
  title: 'Hooks/useClickOutside',
};

export default meta;
type Story = StoryObj<typeof ExampleComponent>;

export const Default: Story = {};
