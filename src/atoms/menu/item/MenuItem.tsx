import React, { PropsWithChildren, useState } from 'react';
import { ChopLogicOrientationMode } from '@enums';
import { ChopLogicMenuItem } from '@models';
import styles from './MenuItem.module.scss';
import { MenuLeaf } from '@atoms/menu/leaf/MenuLeaf';
import { SubMenu } from '../sub-menu/SubMenu';
import { getClassName } from '@utils';

type Props = PropsWithChildren & {
  item: ChopLogicMenuItem;
  mode: ChopLogicOrientationMode;
};

export const MenuItem: React.FC<Props> = ({ item, mode }) => {
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

  return (
    <SubMenu item={item} isSubMenuOpened={isSubMenuOpened} toggleSubMenu={toggleSubMenu} closeSubMenu={closeSubMenu} mode={mode}>
      <ul className={subMenuBarClass} role='menu' aria-label={item.label}>
        {item?.nestedItems?.map((child) => <MenuItem item={child} key={child.id} mode={mode} />)}
      </ul>
    </SubMenu>
  );
};
