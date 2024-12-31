import React, { PropsWithChildren } from 'react';

import { ChopLogicMenuItem, ChopLogicTheme } from '@/models';

import MenuLeaf from './MenuLeaf';

type MenuItemProps = PropsWithChildren & {
  item: ChopLogicMenuItem;
  theme: ChopLogicTheme;
};

const MenuItem: React.FC<MenuItemProps> = ({ item, theme }) => {
  const hasNoChildren = !item?.nestedItems?.length;

  if (hasNoChildren) {
    return <MenuLeaf item={item} theme={theme} />;
  }

  return (
    <li role='menuitem' aria-haspopup='true' aria-expanded='false'>
      <span>{item.label}</span>
      <ul role='menu' aria-label={item.label}>
        {item?.nestedItems?.map((child) => <MenuItem item={child} key={child.id} theme={theme} />)}
      </ul>
    </li>
  );
};

export default MenuItem;
