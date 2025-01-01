import React, { PropsWithChildren, useState } from 'react';

import { ChopLogicMenuItem, ChopLogicTheme } from '@/models';

import { StyledMenuBar } from '../Meny.styled.ts';

import MenuLeaf from './MenuLeaf';
import SubMenuItem from './SubMenuItem';

type MenuItemProps = PropsWithChildren & {
  item: ChopLogicMenuItem;
  theme: ChopLogicTheme;
};

const MenuItem: React.FC<MenuItemProps> = ({ item, theme }) => {
  const hasNoChildren = !item?.nestedItems?.length;
  const [isSubMenuOpened, setIsSubMenuOpened] = useState(false);

  if (hasNoChildren) {
    return <MenuLeaf item={item} theme={theme} />;
  }

  const toggleSubMenu = () => {
    setIsSubMenuOpened(!isSubMenuOpened);
  };

  return (
    <SubMenuItem item={item} theme={theme} isSubMenuOpened={isSubMenuOpened} toggleSubMenu={toggleSubMenu}>
      <StyledMenuBar role='menu' aria-label={item.label} $theme={theme}>
        {item?.nestedItems?.map((child) => <MenuItem item={child} key={child.id} theme={theme} />)}
      </StyledMenuBar>
    </SubMenuItem>
  );
};

export default MenuItem;
