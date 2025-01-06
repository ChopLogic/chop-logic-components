import React from 'react';
import { ChopLogicOrientationMode } from '@enums';
import { useChopLogicTheme } from '@hooks';
import { ChopLogicMenuProps } from '@models';

import MenuItem from './elements/MenuItem.tsx';
import { StyledMenuBar } from './Meny.styled';

const ChopLogicMenu: React.FC<ChopLogicMenuProps> = ({ items, mode = ChopLogicOrientationMode.Vertical }) => {
  const theme = useChopLogicTheme();

  return (
    <StyledMenuBar role='menubar' $theme={theme} $mode={mode}>
      {items.map((item) => (
        <MenuItem key={item.id} item={item} theme={theme} mode={mode} />
      ))}
    </StyledMenuBar>
  );
};

export default ChopLogicMenu;
