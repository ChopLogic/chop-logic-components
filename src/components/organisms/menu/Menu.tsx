import { OrientationMode } from '@enums';
import type { MenuProps } from '@models';
import { getClassName } from '@utils';
import type { FC } from 'react';

import { MenuListItem } from './list-item/MenuListItem';
import styles from './Menu.module.scss';

const Menu: FC<MenuProps> = ({
  items = [],
  mode = OrientationMode.Vertical,
  openedOn = 'click',
  className,
  ...rest
}) => {
  const menuClass = getClassName([
    styles.menuBar,
    className,
    { [styles.menuBar__vertical]: mode === OrientationMode.Vertical },
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
