import React from 'react';
import { useChopLogicTheme } from '@hooks';
import { ChopLogicMenuProps } from '@models';

import MenuItem from './elements/MenuItem.tsx';
import { StyledMenuBar } from './Meny.styled';

const ChopLogicMenu: React.FC<ChopLogicMenuProps> = ({ items, openedOn = 'click' }) => {
  const theme = useChopLogicTheme();

  return (
    <StyledMenuBar role='menubar' $theme={theme}>
      {items.map((item) => (
        <MenuItem key={item.id} item={item} theme={theme} openedOn={openedOn} />
      ))}
    </StyledMenuBar>
  );
};

export default ChopLogicMenu;
