import { MenuLeaf } from '@atoms/menu/leaf/MenuLeaf';
import { ChopLogicOrientationMode } from '@enums';
import { ChopLogicMenuItem } from '@models';
import { getClassName } from '@utils';
import React, { PropsWithChildren, useState } from 'react';

import { SubMenu } from '../sub-menu/SubMenu';
import styles from './MenuItem.module.scss';

type Props = PropsWithChildren & {
  item: ChopLogicMenuItem;
  mode: ChopLogicOrientationMode;
  openedOn?: 'hover' | 'click';
};

export const MenuItem: React.FC<Props> = ({ item, mode, openedOn }) => {
  const isLeaf = !item?.nestedItems?.length;
  const [isSubMenuOpened, setIsSubMenuOpened] = useState(false);
  const subMenuBarClass = getClassName([
    styles.subMenuBar,
    { [styles.subMenuBar__horizontal]: mode === ChopLogicOrientationMode.Horizontal },
  ]);

  if (isLeaf) {
    return <MenuLeaf item={item} />;
  }

  const toggleSubMenu = () => {
    setIsSubMenuOpened(!isSubMenuOpened);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpened(false);
  };

  const openSubMenu = () => {
    setIsSubMenuOpened(true);
  };

  return (
    <SubMenu
      item={item}
      isSubMenuOpened={isSubMenuOpened}
      toggleSubMenu={toggleSubMenu}
      closeSubMenu={closeSubMenu}
      openSubMenu={openSubMenu}
      mode={mode}
      openedOn={openedOn}
    >
      <ul className={subMenuBarClass} role='menu' aria-label={item.label}>
        {item?.nestedItems?.map((child) => <MenuItem item={child} key={child.id} mode={mode} openedOn={openedOn} />)}
      </ul>
    </SubMenu>
  );
};
