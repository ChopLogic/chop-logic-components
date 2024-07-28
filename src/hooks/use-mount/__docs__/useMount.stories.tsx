import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { useMount } from '..';

const ExampleComponent: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const isMounted = useMount(isOpened, 1000);

  return (
    <div>
      <button onClick={() => setIsOpened(!isOpened)}>Toggle Component</button>
      {isMounted && <div style={{ marginTop: '10px', border: '1px solid black', padding: '10px' }}>Component is mounted!</div>}
    </div>
  );
};

const meta: Meta<typeof ExampleComponent> = {
  title: 'Hooks/useMount',
  component: ExampleComponent,
};

export default meta;
type Story = StoryObj<typeof ExampleComponent>;

export const Default: Story = {};
