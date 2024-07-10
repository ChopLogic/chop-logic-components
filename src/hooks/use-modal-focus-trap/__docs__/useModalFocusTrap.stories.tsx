import React, { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useModalFocusTrap } from '..';

const ExampleModal: React.FC = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isOpened, setIsOpened] = useState(false);

  useModalFocusTrap({ modalRef, isOpened });

  return (
    <div>
      <button onClick={() => setIsOpened(true)}>Open Modal</button>
      {isOpened && (
        <div ref={modalRef} tabIndex={-1} style={{ border: '1px solid black', padding: '20px', marginTop: '10px' }}>
          <button onClick={() => setIsOpened(false)}>Close Modal</button>
          <input type='text' placeholder='Focusable Input' />
          <button>Another Button</button>
        </div>
      )}
    </div>
  );
};

const meta: Meta<typeof ExampleModal> = {
  title: 'Hooks/useModalFocusTrap',
  component: ExampleModal,
};

export default meta;
type Story = StoryObj<typeof ExampleModal>;

export const Default: Story = {};
