import React, { PropsWithChildren, useState } from 'react';
import { ChopLogicOrientationMode } from '@enums';
import { ChopLogicMenuItem, ChopLogicTheme } from '@models';

import { StyledSubMenuBar } from '../Meny.styled.ts';

import MenuLeaf from './MenuLeaf';
import SubMenu from './SubMenu.tsx';

type MenuItemProps = PropsWithChildren & {
  item: ChopLogicMenuItem;
  theme: ChopLogicTheme;
  mode: ChopLogicOrientationMode;
};

const MenuItem: React.FC<MenuItemProps> = ({ item, theme, mode }) => {
  const isLeaf = !item?.nestedItems?.length;
  const [isSubMenuOpened, setIsSubMenuOpened] = useState(false);

  if (isLeaf) {
    return <MenuLeaf item={item} theme={theme} />;
  }

  const toggleSubMenu = () => {
    setIsSubMenuOpened(!isSubMenuOpened);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpened(false);
  };

  return (
    <SubMenu
      item={item}
      theme={theme}
      isSubMenuOpened={isSubMenuOpened}
      toggleSubMenu={toggleSubMenu}
      closeSubMenu={closeSubMenu}
      mode={mode}
    >
      <StyledSubMenuBar role='menu' aria-label={item.label} $theme={theme} $mode={mode}>
        {item?.nestedItems?.map((child) => <MenuItem item={child} key={child.id} theme={theme} mode={mode} />)}
      </StyledSubMenuBar>
    </SubMenu>
  );
};

export default MenuItem;
