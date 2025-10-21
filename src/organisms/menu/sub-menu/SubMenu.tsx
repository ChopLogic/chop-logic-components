import { Icon } from '@atoms';
import { IconName, OrientationMode } from '@enums';
import { useClickOutside } from '@hooks';
import type { MenuItem } from '@models';
import { type FC, type KeyboardEvent, type PropsWithChildren, useRef } from 'react';

import styles from './SubMenu.module.scss';

type Props = PropsWithChildren & {
  item: MenuItem;
  isSubMenuOpened: boolean;
  mode: OrientationMode;
  toggleSubMenu: () => void;
  closeSubMenu: () => void;
  openSubMenu: () => void;
  openedOn?: 'hover' | 'click';
};

export const SubMenu: FC<Props> = ({
  item,
  isSubMenuOpened,
  toggleSubMenu,
  closeSubMenu,
  openSubMenu,
  openedOn,
  mode,
  children,
}) => {
  const { icon, link, label } = item;
  const ref = useRef(null);
  const dependentRef = useRef(null);

  const itemContent = link ? (
    <a href={link} target="_blank" rel="noreferrer">
      <Icon name={icon} />
      {label}
    </a>
  ) : (
    <span>
      <Icon name={icon} />
      {label}
    </span>
  );

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    e.stopPropagation();
    if (e.key === ' ') {
      toggleSubMenu();
    }
  };

  const onClickOutsideHandler = () => {
    if (mode === OrientationMode.Vertical) return;
    closeSubMenu();
  };

  useClickOutside({ ref, dependentRef, onClickOutsideHandler });

  return (
    <li
      className={styles.subMenu}
      tabIndex={0}
      role="menuitem"
      aria-haspopup="true"
      aria-expanded={isSubMenuOpened}
      onKeyDown={handleKeyDown}
      onMouseEnter={openedOn === 'hover' ? openSubMenu : undefined}
      onMouseLeave={openedOn === 'hover' ? closeSubMenu : undefined}
      ref={ref}
    >
      <span
        className={styles.text}
        ref={dependentRef}
        onClick={toggleSubMenu}
        onKeyDown={handleKeyDown}
      >
        {itemContent}
        <Icon name={isSubMenuOpened ? IconName.ArrowUp : IconName.ArrowDown} />
      </span>
      {isSubMenuOpened && children}
    </li>
  );
};
