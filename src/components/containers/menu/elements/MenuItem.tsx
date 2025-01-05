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
  openedOn: 'click' | 'hover';
};

const MenuItem: React.FC<MenuItemProps> = ({ item, theme, openedOn, mode }) => {
  const isLeaf = !item?.nestedItems?.length;
  const [isSubMenuOpened, setIsSubMenuOpened] = useState(false);

  if (isLeaf) {
    return <MenuLeaf item={item} theme={theme} />;
  }

  const toggleSubMenu = () => {
    setIsSubMenuOpened(!isSubMenuOpened);
  };

  const openSubMenu = () => {
    setIsSubMenuOpened(true);
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
      openSubMenu={openSubMenu}
      closeSubMenu={closeSubMenu}
      openedOn={openedOn}
      mode={mode}
    >
      <StyledSubMenuBar role='menu' aria-label={item.label} $theme={theme} $mode={mode}>
        {item?.nestedItems?.map((child) => <MenuItem item={child} key={child.id} theme={theme} openedOn={openedOn} mode={mode} />)}
      </StyledSubMenuBar>
    </SubMenu>
  );
};

export default MenuItem;
