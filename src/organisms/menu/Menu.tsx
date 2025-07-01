import React from 'react';
import { ChopLogicOrientationMode } from '@enums';
import { ChopLogicMenuProps } from '@models';
import styles from './Menu.module.scss';
import { getClassName } from '@utils';
import { MenuItem } from '@atoms';

const ChopLogicMenu: React.FC<ChopLogicMenuProps> = ({ items, mode = ChopLogicOrientationMode.Vertical, className, ...rest }) => {
  const menuClass = getClassName([styles.menuBar, className, { [styles.menuBar__vertical]: mode === ChopLogicOrientationMode.Vertical }]);

  return (
    <ul {...rest} role='menubar' className={menuClass}>
      {items.map((item) => (
        <MenuItem key={item.id} item={item} mode={mode} />
      ))}
    </ul>
  );
};

export default ChopLogicMenu;
