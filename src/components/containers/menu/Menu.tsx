import React from 'react';

import { useChopLogicTheme } from '@/hooks';
import { ChopLogicMenuProps } from '@/models';

import MenuItem from './elements/MenuItem.tsx';

const ChopLogicMenu: React.FC<ChopLogicMenuProps> = ({ items }) => {
  const theme = useChopLogicTheme();

  return (
    <ul role='menubar'>
      {items.map((item) => (
        <MenuItem key={item.id} item={item} theme={theme} />
      ))}
    </ul>
  );
};

export default ChopLogicMenu;
