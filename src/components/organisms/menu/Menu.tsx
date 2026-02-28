import { OrientationMode } from '@enums';
import type { MenuProps } from '@types';
import { getClassName } from '@utils';
import type { FC } from 'react';

import { MenuListItem } from './list-item/MenuListItem';
import './Menu.css';

const Menu: FC<MenuProps> = ({
  items = [],
  mode = OrientationMode.Vertical,
  openedOn = 'click',
  className,
  ...rest
}) => {
  const menuClass = getClassName([
    'cl-menu-bar',
    className,
    { 'cl-menu-bar_vertical': mode === OrientationMode.Vertical },
  ]);

  return (
    <menu {...rest} className={menuClass}>
      {items.map((item) => (
        <MenuListItem key={item.id} item={item} mode={mode} openedOn={openedOn} />
      ))}
    </menu>
  );
};

export default Menu;
