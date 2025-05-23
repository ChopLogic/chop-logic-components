import React, { PropsWithChildren, useRef } from 'react';
import { ChopLogicIcon } from '@components/atoms';
import { ChopLogicIconName, ChopLogicOrientationMode } from '@enums';
import { useClickOutside } from '@hooks';
import { ChopLogicMenuItem } from '@models';
import styles from '../Menu.module.scss';

type SubMenuProps = PropsWithChildren & {
  item: ChopLogicMenuItem;
  isSubMenuOpened: boolean;
  mode: ChopLogicOrientationMode;
  toggleSubMenu: () => void;
  closeSubMenu: () => void;
};

const SubMenu: React.FC<SubMenuProps> = ({ item, isSubMenuOpened, toggleSubMenu, closeSubMenu, mode, children }) => {
  const { icon, link, label } = item;
  const ref = useRef(null);
  const dependentRef = useRef(null);

  const itemContent = link ? (
    <a href={link} target='_blank' rel='noreferrer'>
      <ChopLogicIcon name={icon} />
      {label}
    </a>
  ) : (
    <span>
      <ChopLogicIcon name={icon} />
      {label}
    </span>
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    e.stopPropagation();
    if (e.key === ' ') {
      toggleSubMenu();
    }
  };

  const onClickOutsideHandler = () => {
    if (mode === ChopLogicOrientationMode.Vertical) return;
    closeSubMenu();
  };

  useClickOutside({ ref, dependentRef, onClickOutsideHandler });

  return (
    <li
      className={styles.subMenu}
      tabIndex={0}
      role='menuitem'
      aria-haspopup='true'
      aria-expanded={isSubMenuOpened}
      onKeyDown={handleKeyDown}
      ref={ref}
    >
      <span className={styles.text} ref={dependentRef} onClick={toggleSubMenu}>
        {itemContent}
        <ChopLogicIcon name={isSubMenuOpened ? ChopLogicIconName.ArrowUp : ChopLogicIconName.ArrowDown} />
      </span>
      {isSubMenuOpened && children}
    </li>
  );
};

export default SubMenu;
