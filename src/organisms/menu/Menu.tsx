import { OrientationMode } from '@enums';
import { MenuProps } from '@models';
import { getClassName } from '@utils';
import { FC } from 'react';

import { MenuListItem } from './item/MenuListItem';
import styles from './Menu.module.scss';

const Menu: FC<MenuProps> = ({ items = [], mode = OrientationMode.Vertical, openedOn = 'click', className, ...rest }) => {
  const menuClass = getClassName([styles.menuBar, className, { [styles.menuBar__vertical]: mode === OrientationMode.Vertical }]);

  return (
    <ul {...rest} role='menubar' className={menuClass}>
      {items.map((item) => (
        <MenuListItem key={item.id} item={item} mode={mode} openedOn={openedOn} />
      ))}
    </ul>
  );
};

export default Menu;
