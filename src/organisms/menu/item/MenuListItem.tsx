import { OrientationMode } from '@enums';
import { MenuItem } from '@models';
import { getClassName } from '@utils';
import { FC, PropsWithChildren, useState } from 'react';

import { MenuLeaf } from '../leaf/MenuLeaf';
import { SubMenu } from '../sub-menu/SubMenu';
import styles from './MenuListItem.module.scss';

type Props = PropsWithChildren & {
  item: MenuItem;
  mode: OrientationMode;
  openedOn?: 'hover' | 'click';
};

export const MenuListItem: FC<Props> = ({ item, mode, openedOn }) => {
  const isLeaf = !item?.nestedItems?.length;
  const [isSubMenuOpened, setIsSubMenuOpened] = useState(false);
  const subMenuBarClass = getClassName([styles.subMenuBar, { [styles.subMenuBar__horizontal]: mode === OrientationMode.Horizontal }]);

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
        {item?.nestedItems?.map((child) => <MenuListItem item={child} key={child.id} mode={mode} openedOn={openedOn} />)}
      </ul>
    </SubMenu>
  );
};
