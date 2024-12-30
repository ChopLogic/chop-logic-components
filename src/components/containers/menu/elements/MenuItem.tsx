import React, { PropsWithChildren } from 'react';

import { ChopLogicMenuItem } from '@/models';

type MenuItemProps = PropsWithChildren & {
  item: ChopLogicMenuItem;
};

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const hasNoChildren = !item?.nestedItems?.length;

  if (hasNoChildren) {
    return <li role='menuitem'>{item.label}</li>;
  }

  return (
    <li role='menuitem' aria-haspopup='true' aria-expanded='false'>
      <span>{item.label}</span>
      <ul role='menu' aria-label={item.label}>
        {item?.nestedItems?.map((child) => <MenuItem item={child} key={child.id} />)}
      </ul>
    </li>
  );
};

export default MenuItem;
