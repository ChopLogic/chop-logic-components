import { MenuItem } from '@atoms';
import { ChopLogicOrientationMode } from '@enums';
import { ChopLogicMenuProps } from '@models';
import { getClassName } from '@utils';
import React from 'react';

import styles from './Menu.module.scss';

const ChopLogicMenu: React.FC<ChopLogicMenuProps> = ({
  items = [],
  mode = ChopLogicOrientationMode.Vertical,
  openedOn = 'click',
  className,
  ...rest
}) => {
  const menuClass = getClassName([styles.menuBar, className, { [styles.menuBar__vertical]: mode === ChopLogicOrientationMode.Vertical }]);

  return (
    <ul {...rest} role='menubar' className={menuClass}>
      {items.map((item) => (
        <MenuItem key={item.id} item={item} mode={mode} openedOn={openedOn} />
      ))}
    </ul>
  );
};

export default ChopLogicMenu;
