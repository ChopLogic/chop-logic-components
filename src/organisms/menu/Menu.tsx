import { OrientationMode } from '@enums';
import { ChopLogicMenuProps } from '@models';
import { getClassName } from '@utils';
import { FC } from 'react';

import { MenuItem } from './item/MenuItem';
import styles from './Menu.module.scss';

const ChopLogicMenu: FC<ChopLogicMenuProps> = ({ items = [], mode = OrientationMode.Vertical, openedOn = 'click', className, ...rest }) => {
  const menuClass = getClassName([styles.menuBar, className, { [styles.menuBar__vertical]: mode === OrientationMode.Vertical }]);

  return (
    <ul {...rest} role='menubar' className={menuClass}>
      {items.map((item) => (
        <MenuItem key={item.id} item={item} mode={mode} openedOn={openedOn} />
      ))}
    </ul>
  );
};

export default ChopLogicMenu;
