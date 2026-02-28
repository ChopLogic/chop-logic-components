import { Icon } from '@components/atoms';
import { ElementSize, IconName, OrientationMode } from '@enums';
import { useClickOutside } from '@hooks';
import type { MenuItem } from '@types';
import { getClassName } from '@utils/get-class-name';
import { type FC, type KeyboardEvent, type PropsWithChildren, useRef } from 'react';
import './SubMenu.css';

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
  const iconClass = getClassName([
    'cl-sub-menu__icon',
    { 'cl-sub-menu__icon_opened': isSubMenuOpened },
  ]);

  const itemContent = link ? (
    <a href={link} target="_blank" rel="noreferrer">
      <Icon name={icon} size={ElementSize.Small} />
      {label}
    </a>
  ) : (
    <span>
      <Icon name={icon} size={ElementSize.Small} />
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
      className="cl-sub-menu"
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
        className="cl-sub-menu__text"
        ref={dependentRef}
        onClick={toggleSubMenu}
        onKeyDown={handleKeyDown}
      >
        {itemContent}
        <Icon name={IconName.ChevronDown} className={iconClass} size={ElementSize.Small} />
      </span>
      {isSubMenuOpened && children}
    </li>
  );
};
