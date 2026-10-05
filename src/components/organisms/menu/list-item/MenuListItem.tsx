import { OrientationMode } from '@enums';
import type { MenuItem } from '@types';
import { getClassName } from '@utils';
import { type FC, type PropsWithChildren, useEffect, useState } from 'react';

import { MenuLeaf } from '../leaf/MenuLeaf';
import { SubMenu } from '../sub-menu/SubMenu';
import './MenuListItem.css';

type Props = PropsWithChildren & {
  item: MenuItem;
  mode: OrientationMode;
  openedOn?: 'hover' | 'click';
  level: number;
  closeEpoch: number;
  closeMenu: () => void;
};

export const MenuListItem: FC<Props> = ({ item, mode, openedOn, level, closeEpoch, closeMenu }) => {
  const isLeaf = !item?.nestedItems?.length;
  const [isSubMenuOpened, setIsSubMenuOpened] = useState(false);
  const isNested = level > 0 && mode === OrientationMode.Horizontal;
  const collapsesOnActivation = mode === OrientationMode.Horizontal;
  const subMenuBarClass = getClassName([
    'cl-sub-menu-bar',
    { 'cl-sub-menu-bar_horizontal': mode === OrientationMode.Horizontal },
    { 'cl-sub-menu-bar_nested': isNested },
  ]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally reacting to closeEpoch changes only.
  useEffect(() => {
    if (collapsesOnActivation && closeEpoch > 0) {
      setIsSubMenuOpened(false);
    }
  }, [closeEpoch]);

  if (isLeaf) {
    return <MenuLeaf item={item} closeMenu={collapsesOnActivation ? closeMenu : undefined} />;
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
      isNested={isNested}
    >
      <ul className={subMenuBarClass} role="menu" aria-label={item.label}>
        {item?.nestedItems?.map((child) => (
          <MenuListItem
            item={child}
            key={child.id}
            mode={mode}
            openedOn={openedOn}
            level={level + 1}
            closeEpoch={closeEpoch}
            closeMenu={closeMenu}
          />
        ))}
      </ul>
    </SubMenu>
  );
};
