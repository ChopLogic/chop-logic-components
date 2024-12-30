import React from 'react';

import { ChopLogicMenuProps } from '@/models';

import MenuItem from './elements/MenuItem.tsx';

const ChopLogicMenu: React.FC<ChopLogicMenuProps> = ({ items }) => {
  return (
    <ul role='menubar'>
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ChopLogicMenu;
