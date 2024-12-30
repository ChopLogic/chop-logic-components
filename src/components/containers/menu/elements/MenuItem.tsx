import React, { PropsWithChildren } from 'react';

import { ChopLogicMenuItem } from '@/models';

type MenuItemProps = PropsWithChildren & {
  item: ChopLogicMenuItem;
  allItems: ChopLogicMenuItem[];
};

const MenuItem: React.FC<MenuItemProps> = ({ item, allItems }) => {
  const dependentItems = allItems.filter((child) => child.parentId === item.id && child.level - item.level === 1);
  const hasNoChildren = dependentItems.length === 0;

  if (hasNoChildren) {
    return <li role='menuitem'>{item.label}</li>;
  }

  return (
    <li role='menuitem'>
      {item.label}
      <ul role='menuitem'>
        {dependentItems.map((child) => (
          <MenuItem item={child} allItems={allItems} key={child.id} />
        ))}
      </ul>
    </li>
  );
};

export default MenuItem;
