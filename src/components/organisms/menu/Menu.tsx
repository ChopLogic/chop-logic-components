import { OrientationMode } from '@enums';
import type { MenuProps } from '@types';
import { getClassName } from '@utils';
import { type FC, useCallback, useState } from 'react';

import { MenuListItem } from './list-item/MenuListItem';
import './Menu.css';

const Menu: FC<MenuProps> = ({
  items = [],
  mode = OrientationMode.Vertical,
  openedOn = 'click',
  className,
  ...rest
}) => {
  // Bumping this counter signals every open submenu to collapse. It is used to
  // close the whole menu after a leaf is activated (macOS-style flash + close).
  const [closeEpoch, setCloseEpoch] = useState(0);

  const closeMenu = useCallback(() => setCloseEpoch((epoch) => epoch + 1), []);

  const menuClass = getClassName([
    'cl-menu-bar',
    className,
    { 'cl-menu-bar_vertical': mode === OrientationMode.Vertical },
  ]);

  return (
    <menu {...rest} className={menuClass}>
      {items.map((item) => (
        <MenuListItem
          key={item.id}
          item={item}
          mode={mode}
          openedOn={openedOn}
          level={0}
          closeEpoch={closeEpoch}
          closeMenu={closeMenu}
        />
      ))}
    </menu>
  );
};

export default Menu;
