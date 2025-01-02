import React, { PropsWithChildren, useState } from 'react';

import { ChopLogicMenuItem, ChopLogicTheme } from '@/models';

import { StyledSubMenuBar } from '../Meny.styled.ts';

import MenuLeaf from './MenuLeaf';
import SubMenu from './SubMenu.tsx';

type MenuItemProps = PropsWithChildren & {
  item: ChopLogicMenuItem;
  theme: ChopLogicTheme;
};

const MenuItem: React.FC<MenuItemProps> = ({ item, theme }) => {
  const isLeaf = !item?.nestedItems?.length;
  const [isSubMenuOpened, setIsSubMenuOpened] = useState(false);

  if (isLeaf) {
    return <MenuLeaf item={item} theme={theme} />;
  }

  const toggleSubMenu = () => {
    setIsSubMenuOpened(!isSubMenuOpened);
  };

  return (
    <SubMenu item={item} theme={theme} isSubMenuOpened={isSubMenuOpened} toggleSubMenu={toggleSubMenu}>
      <StyledSubMenuBar role='menu' aria-label={item.label} $theme={theme}>
        {item?.nestedItems?.map((child) => <MenuItem item={child} key={child.id} theme={theme} />)}
      </StyledSubMenuBar>
    </SubMenu>
  );
};

export default MenuItem;
